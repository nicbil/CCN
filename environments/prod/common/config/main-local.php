<?php
return [
    'components' => [
        'db' => [
            'class' => 'yii\db\Connection',
            'dsn' => 'mysql:host=us-cdbr-iron-east-04.cleardb.net;dbname=heroku_047cb044e59f6a5',
            'username' => 'bff799ef47fc17',
            'password' => 'e90ac439',
            'charset' => 'utf8',
        ],
        'mailer' => [
            'class' => 'yii\swiftmailer\Mailer',
            'viewPath' => '@common/mail',
        ],
    ],
];
