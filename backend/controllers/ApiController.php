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

    if(!empty($post['id'])) {
      unset($post['id']);
    }

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
    $data = array('AcuteMyocardialInfarctionSt' => $post);

    if ($model->load($data) && $model->save()) {
      return(object)['success' => true];
    }
    return (object)['success' => false];
  }

  public function actionGet_protocol_infarction_st() {
    $post = json_decode(trim(file_get_contents('php://input')), true);
    $query = AcuteMyocardialInfarctionSt::find();

    if(!empty($post['fields']['gender'])) {
      if(!empty($post['fields']['gender']['man']) && empty($post['fields']['gender']['woman'])) {
        $query->where(['=', 'gender', 'man']);
      }

      if(empty($post['fields']['gender']['man']) && !empty($post['fields']['gender']['woman'])) {
        $query->where(['=', 'gender', 'woman']);
      }
    }

    if(!empty($post['fields']['date_and_time_of_arrival_from'])) {
      $date_and_time_of_arrival_from = \Yii::$app->formatter->asDate($post['fields']['date_and_time_of_arrival_from'], 'php:Y-m-d');

      $query->where(['>=', 'date_and_time_of_arrival', $date_and_time_of_arrival_from]);
    }

    if(!empty($post['fields']['date_and_time_of_arrival_before'])) {
      $date_and_time_of_arrival_before = \Yii::$app->formatter->asDate($post['fields']['date_and_time_of_arrival_before'], 'php:Y-m-d').' 23:59:59';

      $query->andWhere(['<=', 'date_and_time_of_arrival', $date_and_time_of_arrival_before]);
    }

    ///print_r($post['fields']); die();
    if(!empty($post['fields']['birthday_date_from'])) {
      $birthday_date_from = \Yii::$app->formatter->asDate($post['fields']['birthday_date_from'], 'php:Y-m-d');
      $query->where(['>=', 'birthday_date', $birthday_date_from]);
    }

    if(!empty($post['fields']['birthday_date_before'])) {
      $birthday_date_before = \Yii::$app->formatter->asDate($post['fields']['birthday_date_before'], 'php:Y-m-d').' 23:59:59';
      $query->andWhere(['<=', 'birthday_date', $birthday_date_before]);
    }

    if(!empty($post['fields']['effect_of_thrombolysis'])) {
      if(!empty($post['fields']['effect_of_thrombolysis']['no']) && empty($post['fields']['effect_of_thrombolysis']['yes'])) {
        $query->where(['=', 'effect_of_thrombolysis', 'no']);
      }

      if(empty($post['fields']['effect_of_thrombolysis']['no']) && !empty($post['fields']['effect_of_thrombolysis']['yes'])) {
        $query->where(['=', 'effect_of_thrombolysis', 'yes']);
      }
    }

    if(!empty($post['fields']['fv'])) {
      if($post['fields']['fv'] == 30) {
        $query->where(['<=', 'fv', $post['fields']['fv']]);
      }

      if($post['fields']['fv'] == 40) {
        $query->where(['>=', 'fv', 30]);
        $query->andWhere(['<=', 'fv', $post['fields']['fv']]);
      }

      if($post['fields']['fv'] == 50) {
        $query->where(['>=', 'fv', 40]);
        $query->andWhere(['<=', 'fv', $post['fields']['fv']]);
      }

      if($post['fields']['fv'] == 70) {
        $query->where(['>=', 'fv', 50]);
        $query->andWhere(['<=', 'fv', $post['fields']['fv']]);
      }
    }

    $query->limit($post['pagination']['pageSize']);

    if(!empty($post['pagination']['pageIndex'])) {
      $query->offset($post['pagination']['pageIndex'] * $post['pagination']['pageSize']);
    }

    if(!empty($post['sort']['active'])) {
      $query->orderBy([$post['sort']['active'] => (($post['sort']['direction'] == 'asc') ? SORT_ASC : SORT_DESC)]);
    }

    $res = $query->all();
    //print_r($date_and_time_of_arrival_from); die();
    return array(
      'rows' => $res,
      'pageLength' => $query->count('id')
    );
  }

  public function actionAuto_complete_protocol_infarction_st() {
    $post = json_decode(trim(file_get_contents('php://input')), true);

    if(!empty($post['first_name']) && !empty($post['last_name']) && !empty($post['patronymic'])) {
      $query = AcuteMyocardialInfarctionSt::find();

      $query->andFilterWhere(['like', 'first_name', $post['first_name']]);
      $query->andFilterWhere(['like', 'last_name', $post['last_name']]);
      $query->andFilterWhere(['like', 'patronymic', $post['patronymic']]);
      $res = $query->all();
    }

    return array('rows' => !empty($res) ? $res : []);
  }
}
