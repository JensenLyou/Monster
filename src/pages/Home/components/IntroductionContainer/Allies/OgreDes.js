import React from 'react';
import { useTranslation } from 'react-i18next';


const OgreDes = () => {

    const { t } = useTranslation()

    return (
        <>
            <h2>{t('home.text.alliesOgreText1')}</h2>
            <h2>{t('home.text.alliesOgreText2')}</h2>
            <h2>{t('home.text.alliesOgreText3')}</h2>
        </>
    )
}

export default OgreDes;