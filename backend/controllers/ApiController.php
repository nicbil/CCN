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
use app\models\AcuteMyocardialInfarctionSt;
use app\models\AcuteMyocardialInfarctionStSearch;
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


  public function actionGet_protocols_infarction_st() {
    $searchModel = new AcuteMyocardialInfarctionStSearch();
    $dataProvider = $searchModel->search(array('r' => 'acute_myocardial_infarction_st/index'));

    return [
      'protocols' => $dataProvider->getModels(),
    ];
  }

  public function actionCreate_protocol_infarction_st() {
    $post = json_decode(trim(file_get_contents('php://input')), true);
    $post['birthday_date'] = !empty($post['birthday_date']) ?
      \Yii::$app->formatter->asDate($post['birthday_date'], 'php:Y-m-d') : '00-00-00';

    foreach (['date_and_time_of_arrival', 'date_time_death'] as $field) {
      if(!empty($post[$field])) {
        $date_time = explode(' ', $post[$field]);
        $post[$field] = \Yii::$app->formatter->asDate($date_time[1], 'php:Y-m-d') . ' ' .
          $date_time[0] . ':00';
      } else {
        $post[$field] = '00:00:00 00-00-0000';
      }
    }


    //print_r($post); die();
    $model = new AcuteMyocardialInfarctionSt();
    $data = array(
      '_csrf-backend' => 'xkIK_iVqasGhiYXhZsg_lZ_d5lfRLAOlrpcAPFa2GRV11BuT-WHehrjX-Oo4_0qUL1PkQCrA5pKidOlfI5WkDQ==',
      'AcuteMyocardialInfarctionSt' => $post
    );

    if ($model->load($data) && $model->save()) {
      return(object)['success' => true];
    }
    return (object)['success' => false];
  }
}
