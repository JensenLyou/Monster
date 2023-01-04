import React from 'react';
import { useTranslation } from 'react-i18next';


const PillageDes = () => {
    const { t } = useTranslation()
    return (
        <>
            <h2>{t('home.text.pillageText1')}</h2>
            <h2>{t('home.text.pillageText2')}</h2>
        </>
    )
}

export default PillageDes;