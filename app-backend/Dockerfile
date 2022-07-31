FROM php:8.1.6-fpm-alpine

RUN docker-php-ext-install pdo pdo_mysql

RUN apk update && apk add curl && \
  curl -sS https://getcomposer.org/installer | php \
  && chmod +x composer.phar && mv composer.phar /usr/local/bin/composer

RUN addgroup -g 1000 -S www && \
    adduser -u 1000 -S www -G www-data

USER www-data

WORKDIR /var/www/html

COPY --chown=www:www-data . .



