<?php

use yii\helpers\Html;


/* @var $this yii\web\View */
/* @var $model app\models\AcuteMyocardialInfarctionSt */

$this->title = 'Create Acute Myocardial Infarction St';
$this->params['breadcrumbs'][] = ['label' => 'Acute Myocardial Infarction Sts', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="acute-myocardial-infarction-st-create">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
