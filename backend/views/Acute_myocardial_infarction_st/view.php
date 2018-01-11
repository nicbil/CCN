<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/* @var $this yii\web\View */
/* @var $model app\models\AcuteMyocardialInfarctionSt */

$this->title = $model->id;
$this->params['breadcrumbs'][] = ['label' => 'Acute Myocardial Infarction Sts', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="acute-myocardial-infarction-st-view">

    <h1><?= Html::encode($this->title) ?></h1>

    <p>
        <?= Html::a('Update', ['update', 'id' => $model->id], ['class' => 'btn btn-primary']) ?>
        <?= Html::a('Delete', ['delete', 'id' => $model->id], [
            'class' => 'btn btn-danger',
            'data' => [
                'confirm' => 'Are you sure you want to delete this item?',
                'method' => 'post',
            ],
        ]) ?>
    </p>

    <?= DetailView::widget([
        'model' => $model,
        'attributes' => [
            'id',
            'arrival_date',
            'arrival_time',
            'first_name',
            'last_name',
            'patronymic',
            'birthday',
            'gender',
            'delivered_smp:ntext',
            'delivered_yourself:ntext',
            'killip_type',
            'effect_of_thrombolysis',
            'thrombolysis:ntext',
            'ecg:ntext',
            'time_intervals:ntext',
            'continuing_pain',
            'increase_segment_st',
            'thrombaspiration',
            'blood_timi_before',
            'blood_timi_after',
            'stenosis_diameter_ica_before_chkv',
            'stenosis_diameter_ica_after_chkv',
            'additionally:ntext',
            'type_interventions:ntext',
            'lka:ntext',
            'pka:ntext',
            'lvg:ntext',
            'operator:ntext',
            'date_time_death',
        ],
    ]) ?>

</div>
