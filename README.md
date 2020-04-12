**Installation**

**1. Composer**
  - Clone git repository: git clone https://github.com/Ziya584/webtemplate.git local_repo_name
  - cd local_repo_name/
  - rm -rf .git
  - Run: git init optional
  - Run: composer update
  - Run: cp .env.example .env
  - Run: nano .env and change DB_HOST=192.168.10.10 if you use homestead
  - Run: php artisan key:generate 

