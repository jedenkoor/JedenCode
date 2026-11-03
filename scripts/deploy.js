// Uploads ./.output/public (nuxt generate) to the hosting over FTP.
// Only changed files are transferred: the state of the last deploy is kept
// on the server in .ftp-deploy-sync-state.json (same format as FTP-Deploy-Action).
//
// Credentials come from .env.deploy.local (git-ignored):
//   FTP_SERVER, FTP_USERNAME, FTP_PASSWORD, FTP_SERVER_DIR
//
// Usage: npm run deploy            build + upload
//        npm run deploy -- --dry-run  show what would change, upload nothing

import { existsSync } from 'node:fs'
import { deploy } from '@samkirkland/ftp-deploy'

const ENV_FILE = '.env.deploy.local'
if (existsSync(ENV_FILE)) process.loadEnvFile(ENV_FILE)

const required = ['FTP_SERVER', 'FTP_USERNAME', 'FTP_PASSWORD', 'FTP_SERVER_DIR']
const missing = required.filter((name) => !process.env[name])
if (missing.length) {
  console.error(`Missing ${missing.join(', ')} — add them to ${ENV_FILE}`)
  process.exit(1)
}

if (!existsSync('.output/public/index.html')) {
  console.error('.output/public/ is empty — run "npm run build" first')
  process.exit(1)
}

try {
  await deploy({
    server: process.env.FTP_SERVER,
    username: process.env.FTP_USERNAME,
    password: process.env.FTP_PASSWORD,
    protocol: 'ftps',
    'local-dir': './.output/public/',
    'server-dir': process.env.FTP_SERVER_DIR,
    'dry-run': process.argv.includes('--dry-run'),
    'log-level': 'standard'
  })
} catch (error) {
  console.error(error)
  process.exit(1)
}
