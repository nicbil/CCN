<?php

namespace backend\controllers;

use Yii;
use yii\web\Controller;
use yii\rest\ActiveController;
use SoapClient;
use SimpleXMLElement;
use SoapVar;
use linslin\yii2\curl;
use app\models\YandexGeoContentSearch;
use app\models\YandexGeoTabsSearch;
use app\models\YandexGeoMessagesSearch;
use common\models\LoginForm;
class ApiController extends ActiveController {
  public $modelClass = 'app\models\Api';

  public function actionAuth() {
    $model = new LoginForm();

    $auth = array(
      'LoginForm' => array(
        'username' => 'Nicholas',
        'password' => '123456',
        'rememberMe' => 1
      )
    );

    if ($model->load($auth) && $model->login()) {
      return ['0'=> true];
    } else {
      return ['0'=> false];
    }
  }
}
