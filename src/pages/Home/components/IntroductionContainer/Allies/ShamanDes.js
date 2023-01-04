import React from 'react';
import { useTranslation } from 'react-i18next';


const ShamanDes = () => {

    const { t } = useTranslation()

    return (
        <>
            <h2>{t('home.text.alliesShamanTest1')}</h2>
            <h2>{t('home.text.alliesShamanTest2')}</h2>
            <h2>{t('home.text.alliesShamanTest3')}</h2>
        </>
    )
}

export default ShamanDes;