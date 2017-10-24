<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model app\models\AcuteMyocardialInfarctionSt */

$this->title = 'Update Acute Myocardial Infarction St: ' . $model->id;
$this->params['breadcrumbs'][] = ['label' => 'Acute Myocardial Infarction Sts', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->id, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = 'Update';
?>
<div class="acute-myocardial-infarction-st-update">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
