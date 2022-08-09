# Simple Laravel API and React Application
- Docker Compose 
- React
- Laravel
- MySQL
- PhpMyAdmin

## Frontend
- NodeJS 13.10.1 Alpine
- React 16.8.6
- Webpack 4

## Backend
- PHP 7.4 FPM Alpine
- Laravel 8
- Composer 1.10
- NodeJS 14.17.0 Alpine

## MySQL and PhpMyAdmin

MySQL Version: 5.7.x

## To start the project

Clone this repository
```
git clone https://github.com/kevlongalloway/react-laravel.git
```

Change directory into laravel project
```
cd react-laravel/app-backend
```

Run composer install
```
composer install
```

Copy .env.example to .env
```
cp .env.example .env
```

Generate new Application Key
```
php artisan key:generate
```

Go to root directory of project
```
cd ..
```

Execute the following command and the Docker will build and run the containers;

```
docker-compose up --build
```

While the containers are running, open a new tab in terminal and run the following command to run database migrations
```
docker exec -it php php artisan migrate --seed
```

App should be running on http://localhost:80

### To-Do

1. Webpack and Babel configuration for Frontend & Updating the versions of the dependencies in Frontend
2. Backend - Configure route protection for api authenticated routes