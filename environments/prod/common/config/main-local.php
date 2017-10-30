<?php
return [
    'components' => [
        'db' => [
            'class' => 'yii\db\Connection',
            'dsn' => 'mysql:host=us-cdbr-iron-east-05.cleardb.net;dbname=heroku_434ec9717e8d423',
            'username' => 'b2b715b7f0779d',
            'password' => 'b12bbf6a',
            'charset' => 'utf8',
        ],
        'mailer' => [
            'class' => 'yii\swiftmailer\Mailer',
            'viewPath' => '@common/mail',
        ],
    ],
];
