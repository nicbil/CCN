<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model app\models\AcuteMyocardialInfarctionSt */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="acute-myocardial-infarction-st-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'id')->textInput() ?>

    <?= $form->field($model, 'arrival_date')->textInput() ?>

    <?= $form->field($model, 'arrival_time')->textInput() ?>

    <?= $form->field($model, 'first_name')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'last_name')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'patronymic')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'birthday_date')->textInput() ?>

    <?= $form->field($model, 'gender')->dropDownList([ 'man' => 'Man', 'woman' => 'Woman', '' => '', ], ['prompt' => '']) ?>

    <?= $form->field($model, 'delivered_smp')->textarea(['rows' => 6]) ?>

    <?= $form->field($model, 'delivered_yourself')->textarea(['rows' => 6]) ?>

    <?= $form->field($model, 'killip_type')->textInput() ?>

    <?= $form->field($model, 'effect_of_thrombolysis')->dropDownList([ 'no' => 'No', 'yes' => 'Yes', '' => '', ], ['prompt' => '']) ?>

    <?= $form->field($model, 'thrombolysis')->textarea(['rows' => 6]) ?>

    <?= $form->field($model, 'ecg')->textarea(['rows' => 6]) ?>

    <?= $form->field($model, 'time_intervals')->textarea(['rows' => 6]) ?>

    <?= $form->field($model, 'continuing_pain')->dropDownList([ 'no' => 'No', 'yes' => 'Yes', '' => '', ], ['prompt' => '']) ?>

    <?= $form->field($model, 'increase_segment_st')->dropDownList([ 'no' => 'No', 'yes' => 'Yes', '' => '', ], ['prompt' => '']) ?>

    <?= $form->field($model, 'thrombaspiration')->dropDownList([ 'thrombus_not_received' => 'Thrombus not received', 'thrombus_received' => 'Thrombus received', 'failed' => 'Failed', '' => '', ], ['prompt' => '']) ?>

    <?= $form->field($model, 'blood_timi_before')->textInput() ?>

    <?= $form->field($model, 'blood_timi_after')->textInput() ?>

    <?= $form->field($model, 'stenosis_diameter_ica_before_chkv')->textInput() ?>

    <?= $form->field($model, 'stenosis_diameter_ica_after_chkv')->textInput() ?>

    <?= $form->field($model, 'additionally')->textarea(['rows' => 6]) ?>

    <?= $form->field($model, 'type_interventions')->textarea(['rows' => 6]) ?>

    <?= $form->field($model, 'lka')->textarea(['rows' => 6]) ?>

    <?= $form->field($model, 'pka')->textarea(['rows' => 6]) ?>

    <?= $form->field($model, 'lvg')->textarea(['rows' => 6]) ?>

    <?= $form->field($model, 'operator')->textarea(['rows' => 6]) ?>

    <?= $form->field($model, 'date_time_death')->textInput() ?>

    <div class="form-group">
        <?= Html::submitButton($model->isNewRecord ? 'Create' : 'Update', ['class' => $model->isNewRecord ? 'btn btn-success' : 'btn btn-primary']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
