#!/bin/sh

php init --env=2 --overwrite=All
php yii migrate/up --interactive=0
php yii cache/flush-all
php yii cache/flush-schema --interactive=0
