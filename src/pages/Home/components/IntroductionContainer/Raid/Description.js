import React from 'react';
import { useTranslation } from 'react-i18next';


const RaidDes = () => {

    const { t } = useTranslation()
    
    return (
        <>
            <h2>{t('home.text.raidText1')}</h2>
            <h2>{t('home.text.raidText2')}</h2>
        </>
    )
}

export default RaidDes;