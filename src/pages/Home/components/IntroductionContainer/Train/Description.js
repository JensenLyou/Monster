import React from 'react';
import { useTranslation } from 'react-i18next';


const TrainDes = () => {

    const { t } = useTranslation()
    
    return (
        <>
            <h2>{t('home.text.trainText1')}</h2>
            <h2>{t('home.text.trainText2')}</h2>
        </>
    )
}

export default TrainDes;