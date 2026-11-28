-- Схема портфолио: профиль, опыт, навыки, проекты, заявки с формы.
-- Применяется один раз, версия отмечается в schema_migrations.

CREATE TABLE IF NOT EXISTS profile (
    id TINYINT UNSIGNED NOT NULL DEFAULT 1,
    full_name VARCHAR(120) NOT NULL,
    title_en VARCHAR(160) NOT NULL,
    title_ru VARCHAR(160) NOT NULL,
    headline_en VARCHAR(255) NOT NULL,
    headline_ru VARCHAR(255) NOT NULL,
    summary_en TEXT NOT NULL,
    summary_ru TEXT NOT NULL,
    location_en VARCHAR(120) NOT NULL,
    location_ru VARCHAR(120) NOT NULL,
    experience_years TINYINT UNSIGNED NOT NULL,
    cv_url_en VARCHAR(255) NOT NULL,
    cv_url_ru VARCHAR(255) NOT NULL,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    CONSTRAINT profile_singleton CHECK (id = 1)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS contacts (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    kind ENUM ('email', 'phone', 'telegram', 'github', 'linkedin') NOT NULL,
    label VARCHAR(160) NOT NULL,
    href VARCHAR(255) NOT NULL,
    is_external TINYINT (1) NOT NULL DEFAULT 0,
    sort_order INT NOT NULL DEFAULT 0,
    PRIMARY KEY (id),
    KEY contacts_order (sort_order)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS experience (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    company VARCHAR(160) NOT NULL,
    descriptor_en VARCHAR(255) DEFAULT NULL,
    descriptor_ru VARCHAR(255) DEFAULT NULL,
    role VARCHAR(160) NOT NULL,
    period_en VARCHAR(80) NOT NULL,
    period_ru VARCHAR(80) NOT NULL,
    sort_order INT NOT NULL DEFAULT 0,
    is_published TINYINT (1) NOT NULL DEFAULT 1,
    PRIMARY KEY (id),
    KEY experience_order (is_published, sort_order)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS experience_links (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    experience_id INT UNSIGNED NOT NULL,
    label VARCHAR(160) NOT NULL,
    href VARCHAR(255) NOT NULL,
    sort_order INT NOT NULL DEFAULT 0,
    PRIMARY KEY (id),
    KEY experience_links_parent (experience_id, sort_order),
    CONSTRAINT experience_links_fk FOREIGN KEY (experience_id) REFERENCES experience (id) ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS experience_achievements (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    experience_id INT UNSIGNED NOT NULL,
    text_en TEXT NOT NULL,
    text_ru TEXT NOT NULL,
    sort_order INT NOT NULL DEFAULT 0,
    PRIMARY KEY (id),
    KEY experience_achievements_parent (experience_id, sort_order),
    CONSTRAINT experience_achievements_fk FOREIGN KEY (experience_id) REFERENCES experience (id) ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS education (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    degree_en VARCHAR(160) NOT NULL,
    degree_ru VARCHAR(160) NOT NULL,
    institution_en VARCHAR(200) NOT NULL,
    institution_ru VARCHAR(200) NOT NULL,
    period_en VARCHAR(80) NOT NULL,
    period_ru VARCHAR(80) NOT NULL,
    sort_order INT NOT NULL DEFAULT 0,
    PRIMARY KEY (id),
    KEY education_order (sort_order)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS languages (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    language_en VARCHAR(80) NOT NULL,
    language_ru VARCHAR(80) NOT NULL,
    level_en VARCHAR(80) NOT NULL,
    level_ru VARCHAR(80) NOT NULL,
    sort_order INT NOT NULL DEFAULT 0,
    PRIMARY KEY (id),
    KEY languages_order (sort_order)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS skill_groups (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    title_en VARCHAR(120) NOT NULL,
    title_ru VARCHAR(120) NOT NULL,
    sort_order INT NOT NULL DEFAULT 0,
    PRIMARY KEY (id),
    KEY skill_groups_order (sort_order)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS skills (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    group_id INT UNSIGNED NOT NULL,
    text_en VARCHAR(160) NOT NULL,
    text_ru VARCHAR(160) NOT NULL,
    sort_order INT NOT NULL DEFAULT 0,
    PRIMARY KEY (id),
    KEY skills_parent (group_id, sort_order),
    CONSTRAINT skills_fk FOREIGN KEY (group_id) REFERENCES skill_groups (id) ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS projects (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    slug VARCHAR(120) NOT NULL,
    type VARCHAR(40) NOT NULL,
    title_en VARCHAR(160) NOT NULL,
    title_ru VARCHAR(160) NOT NULL,
    description_en TEXT NOT NULL,
    description_ru TEXT NOT NULL,
    demo VARCHAR(255) NOT NULL,
    repo VARCHAR(255) DEFAULT NULL,
    image VARCHAR(255) NOT NULL,
    stack JSON NOT NULL,
    year SMALLINT UNSIGNED NOT NULL,
    sort_order INT NOT NULL DEFAULT 0,
    is_published TINYINT (1) NOT NULL DEFAULT 1,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    UNIQUE KEY projects_slug (slug),
    KEY projects_order (is_published, sort_order),
    KEY projects_year (year)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS messages (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    name VARCHAR(120) NOT NULL,
    contact VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    ip VARCHAR(45) DEFAULT NULL,
    user_agent VARCHAR(255) DEFAULT NULL,
    status ENUM ('new', 'read', 'archived') NOT NULL DEFAULT 'new',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    KEY messages_created (created_at),
    KEY messages_status (status, created_at)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS schema_migrations (
    version VARCHAR(64) NOT NULL,
    applied_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (version)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

INSERT INTO schema_migrations (version) VALUES ('001_init')
ON DUPLICATE KEY UPDATE version = version;
