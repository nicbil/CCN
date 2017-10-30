#!/bin/sh

php init --env=Production --overwrite=All
php yii migrate/up --interactive=0
#php yii cache/flush-all
#php yii cache/flush-schema --interactive=0
#composer global remove "fxp/composer-asset-plugin"
#composer clear-cache
#rm -rf ~/.composer
#composer self-update
#composer global require "fxp/composer-asset-plugin:*"
#composer install
#php yii migrate/redo 1 --interactive=0