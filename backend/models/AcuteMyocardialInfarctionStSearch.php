<?php

namespace app\models;

use Yii;
use yii\base\Model;
use yii\data\ActiveDataProvider;
use app\models\AcuteMyocardialInfarctionSt;

/**
 * AcuteMyocardialInfarctionStSearch represents the model behind the search form about `app\models\AcuteMyocardialInfarctionSt`.
 */
class AcuteMyocardialInfarctionStSearch extends AcuteMyocardialInfarctionSt
{
    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['id'], 'integer'],
            [['date_and_time_of_arrival', 'first_name', 'last_name', 'patronymic', 'birthday_date', 'gender', 'delivered', 'effect_of_thrombolysis', 'thrombolysis', 'ecg', 'time_intervals', 'continuing_pain', 'increase_segment_st', 'thrombaspiration', 'additionally', 'type_interventions', 'lka', 'pka', 'lvg', 'operator', 'date_and_time_of_death', 'killip_type', 'blood_timi_before', 'blood_timi_after', 'stenosis_diameter_ica_before_chkv', 'stenosis_diameter_ica_after_chkv'], 'safe'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function scenarios()
    {
        // bypass scenarios() implementation in the parent class
        return Model::scenarios();
    }

    /**
     * Creates data provider instance with search query applied
     *
     * @param array $params
     *
     * @return ActiveDataProvider
     */
    public function search($params)
    {
        $query = AcuteMyocardialInfarctionSt::find();

        // add conditions that should always apply here

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
        ]);

        $this->load($params);

        if (!$this->validate()) {
            // uncomment the following line if you do not want to return any records when validation fails
            // $query->where('0=1');
            return $dataProvider;
        }

        // grid filtering conditions
        $query->andFilterWhere([
            'id' => $this->id,
            'date_and_time_of_arrival' => $this->date_and_time_of_arrival,
            'birthday_date' => $this->birthday_date,
            'killip_type' => $this->killip_type,
            'blood_timi_before' => $this->blood_timi_before,
            'blood_timi_after' => $this->blood_timi_after,
            'stenosis_diameter_ica_before_chkv' => $this->stenosis_diameter_ica_before_chkv,
            'stenosis_diameter_ica_after_chkv' => $this->stenosis_diameter_ica_after_chkv,
            'date_and_time_of_death' => $this->date_and_time_of_death,
        ]);

        $query->andFilterWhere(['like', 'first_name', $this->first_name])
            ->andFilterWhere(['like', 'last_name', $this->last_name])
            ->andFilterWhere(['like', 'patronymic', $this->patronymic])
            ->andFilterWhere(['like', 'gender', $this->gender])
            ->andFilterWhere(['like', 'delivered', $this->delivered])
            ->andFilterWhere(['like', 'effect_of_thrombolysis', $this->effect_of_thrombolysis])
            ->andFilterWhere(['like', 'thrombolysis', $this->thrombolysis])
            ->andFilterWhere(['like', 'ecg', $this->ecg])
            ->andFilterWhere(['like', 'time_intervals', $this->time_intervals])
            ->andFilterWhere(['like', 'continuing_pain', $this->continuing_pain])
            ->andFilterWhere(['like', 'increase_segment_st', $this->increase_segment_st])
            ->andFilterWhere(['like', 'thrombaspiration', $this->thrombaspiration])
            ->andFilterWhere(['like', 'additionally', $this->additionally])
            ->andFilterWhere(['like', 'type_interventions', $this->type_interventions])
            ->andFilterWhere(['like', 'lka', $this->lka])
            ->andFilterWhere(['like', 'pka', $this->pka])
            ->andFilterWhere(['like', 'lvg', $this->lvg])
            ->andFilterWhere(['like', 'operator', $this->operator]);

        return $dataProvider;
    }
}
