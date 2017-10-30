<?php

use yii\db\Migration;

class m171023_114730_acute_myocardial_infarction_st extends Migration
{
    public function up() {
        $tableOptions = null;
        if ($this->db->driverName === 'mysql') {
            // http://stackoverflow.com/questions/766809/whats-the-difference-between-utf8-general-ci-and-utf8-unicode-ci
            $tableOptions = 'CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE=InnoDB';
        }

        $this->createTable('{{%acute_myocardial_infarction_st}}', [
            'id' => 'int(11) PRIMARY KEY AUTO_INCREMENT',
            'date_and_time_of_arrival' => 'datetime NOT NULL',
            'first_name' => 'varchar(100) NOT NULL',
            'last_name' => 'varchar(100) NOT NULL',
            'patronymic' => 'varchar(100) NOT NULL',
            'birthday_date' => 'date NOT NULL',
            'gender' => "enum('man','woman','','') NOT NULL",
            'delivered' => 'text NOT NULL',
            'killip_type' => 'varchar(2) NOT NULL',
            'effect_of_thrombolysis' => "enum('no','yes','','') NOT NULL",
            'thrombolysis' => 'text NOT NULL',
            'ecg' => 'text NOT NULL',
            'time_intervals' => 'text NOT NULL',
            'continuing_pain' => "enum('no','yes','','') NOT NULL",
            'increase_segment_st' => "enum('no','yes','','') NOT NULL",
            'thrombaspiration' => "enum('thrombus_not_received','thrombus_received','failed','') NOT NULL",
            'blood_timi_before' => 'varchar(2) NOT NULL',
            'blood_timi_after' => 'varchar(2) NOT NULL',
            'stenosis_diameter_ica_before_chkv' => 'varchar(2) NOT NULL',
            'stenosis_diameter_ica_after_chkv' => 'varchar(2) NOT NULL',
            'additionally' => 'text NOT NULL',
            'type_interventions' => 'text NOT NULL',
            'lka' => 'text NOT NULL',
            'pka' => 'text NOT NULL',
            'lvg' => 'text NOT NULL',
            'fv' => 'text NOT NULL',
            'cause_of_death' => 'text NOT NULL',
            'operator' => 'text NOT NULL',
            'date_and_time_of_death' => 'datetime NOT NULL'
        ], $tableOptions);
    }

    public function down() {
        $this->dropTable('acute_myocardial_infarction_st');
    }
}