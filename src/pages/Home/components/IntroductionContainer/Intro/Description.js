import React from 'react';
import { useTranslation } from 'react-i18next';


const IntroDes = () => {
    const { t } = useTranslation()
    return (
        <>
            <h2>{t('home.text.introText1')}</h2>
            <h2>{t('home.text.introText2')}</h2>
            <h2>{t('home.text.introText3')}</h2>
            <h2>{t('home.text.introText4')}</h2>
        </>
    )
}

export default IntroDes;