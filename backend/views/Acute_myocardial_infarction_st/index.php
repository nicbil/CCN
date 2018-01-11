<?php

use yii\helpers\Html;
use yii\grid\GridView;

/* @var $this yii\web\View */
/* @var $searchModel app\models\AcuteMyocardialInfarctionStSearch */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = 'Acute Myocardial Infarction Sts';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="acute-myocardial-infarction-st-index">

    <h1><?= Html::encode($this->title) ?></h1>
    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>

    <p>
        <?= Html::a('Create Acute Myocardial Infarction St', ['create'], ['class' => 'btn btn-success']) ?>
    </p>
    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

            'id',
            'arrival_date',
            'arrival_time',
            'first_name',
            'last_name',
            // 'patronymic',
            // 'birthday',
            // 'gender',
            // 'delivered_smp:ntext',
            // 'delivered_yourself:ntext',
            // 'killip_type',
            // 'effect_of_thrombolysis',
            // 'thrombolysis:ntext',
            // 'ecg:ntext',
            // 'time_intervals:ntext',
            // 'continuing_pain',
            // 'increase_segment_st',
            // 'thrombaspiration',
            // 'blood_timi_before',
            // 'blood_timi_after',
            // 'stenosis_diameter_ica_before_chkv',
            // 'stenosis_diameter_ica_after_chkv',
            // 'additionally:ntext',
            // 'type_interventions:ntext',
            // 'lka:ntext',
            // 'pka:ntext',
            // 'lvg:ntext',
            // 'operator:ntext',
            // 'date_time_death',

            ['class' => 'yii\grid\ActionColumn'],
        ],
    ]); ?>
</div>
