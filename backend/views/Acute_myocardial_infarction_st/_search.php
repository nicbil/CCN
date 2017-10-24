<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model app\models\AcuteMyocardialInfarctionStSearch */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="acute-myocardial-infarction-st-search">

    <?php $form = ActiveForm::begin([
        'action' => ['index'],
        'method' => 'get',
    ]); ?>

    <?= $form->field($model, 'id') ?>

    <?= $form->field($model, 'arrival_date') ?>

    <?= $form->field($model, 'arrival_time') ?>

    <?= $form->field($model, 'first_name') ?>

    <?= $form->field($model, 'last_name') ?>

    <?php // echo $form->field($model, 'patronymic') ?>

    <?php // echo $form->field($model, 'birthday_date') ?>

    <?php // echo $form->field($model, 'gender') ?>

    <?php // echo $form->field($model, 'delivered_smp') ?>

    <?php // echo $form->field($model, 'delivered_yourself') ?>

    <?php // echo $form->field($model, 'killip_type') ?>

    <?php // echo $form->field($model, 'effect_of_thrombolysis') ?>

    <?php // echo $form->field($model, 'thrombolysis') ?>

    <?php // echo $form->field($model, 'ecg') ?>

    <?php // echo $form->field($model, 'time_intervals') ?>

    <?php // echo $form->field($model, 'continuing_pain') ?>

    <?php // echo $form->field($model, 'increase_segment_st') ?>

    <?php // echo $form->field($model, 'thrombaspiration') ?>

    <?php // echo $form->field($model, 'blood_timi_before') ?>

    <?php // echo $form->field($model, 'blood_timi_after') ?>

    <?php // echo $form->field($model, 'stenosis_diameter_ica_before_chkv') ?>

    <?php // echo $form->field($model, 'stenosis_diameter_ica_after_chkv') ?>

    <?php // echo $form->field($model, 'additionally') ?>

    <?php // echo $form->field($model, 'type_interventions') ?>

    <?php // echo $form->field($model, 'lka') ?>

    <?php // echo $form->field($model, 'pka') ?>

    <?php // echo $form->field($model, 'lvg') ?>

    <?php // echo $form->field($model, 'operator') ?>

    <?php // echo $form->field($model, 'date_time_death') ?>

    <div class="form-group">
        <?= Html::submitButton('Search', ['class' => 'btn btn-primary']) ?>
        <?= Html::resetButton('Reset', ['class' => 'btn btn-default']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
