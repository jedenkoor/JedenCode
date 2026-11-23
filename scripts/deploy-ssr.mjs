import { execFileSync } from 'node:child_process'
import { copyFileSync, cpSync, existsSync, mkdtempSync, rmSync } from 'node:fs'
import { tmpdir, homedir } from 'node:os'
import { basename, join } from 'node:path'

const ENV_FILE = '.env.deploy.local'
if (existsSync(ENV_FILE)) process.loadEnvFile(ENV_FILE)

const required = ['SSH_HOST', 'SSH_USER', 'SSH_TARGET_DIR']
const missing = required.filter(name => !process.env[name])
if (missing.length) {
    console.error(`Missing ${missing.join(', ')} — add them to ${ENV_FILE}`)
    process.exit(1)
}

const keyPath = (process.env.SSH_KEY_PATH || '~/.ssh/id_ed25519').replace(/^~/, homedir())
if (!existsSync(keyPath)) {
    console.error(`SSH key not found: ${keyPath}`)
    process.exit(1)
}

if (!existsSync('.output/server/index.mjs')) {
    console.error('.output/server/index.mjs not found — run "npm run build" first')
    process.exit(1)
}

const host = process.env.SSH_HOST
const user = process.env.SSH_USER
const port = process.env.SSH_PORT || '22'
const targetDir = process.env.SSH_TARGET_DIR.replace(/\/?$/, '/')
const remoteArchive = `tmp/ssr-${Date.now()}.tgz`
const staging = mkdtempSync(join(tmpdir(), 'ssr-deploy-'))
const archive = join(staging, basename(remoteArchive))

try {
    copyFileSync('deploy/passenger/app.js', join(staging, 'app.js'))
    cpSync('.output', join(staging, '.output'), { recursive: true, dereference: true })

    execFileSync('tar', ['-czhf', archive, '-C', staging, 'app.js', '.output'], {
        stdio: 'inherit'
    })

    const sshOptions = ['-i', keyPath, '-p', port, '-o', 'StrictHostKeyChecking=accept-new', '-o', 'BatchMode=yes']
    const scpOptions = ['-i', keyPath, '-P', port, '-o', 'StrictHostKeyChecking=accept-new', '-o', 'BatchMode=yes']

    execFileSync('scp', [...scpOptions, archive, `${user}@${host}:${remoteArchive}`], {
        stdio: 'inherit'
    })

    const remoteCommand = [
        'set -e',
        `cd '${targetDir}'`,
        'mkdir -p tmp',
        'rm -rf .output',
        `tar -xzf ~/${remoteArchive} -C .`,
        'touch tmp/restart.txt',
        `rm -f ~/${remoteArchive}`
    ].join('; ')

    execFileSync('ssh', [...sshOptions, `${user}@${host}`, remoteCommand], {
        stdio: 'inherit'
    })

    console.log(`Deployed to ${host}:${targetDir}`)
} finally {
    rmSync(staging, { recursive: true, force: true })
}
