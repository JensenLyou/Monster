import React from 'react';
import { useTranslation } from 'react-i18next';


const FarmDes = () => {

    const { t } = useTranslation()
    
    return (
        <>
            <h2>{t('home.text.farmText')}</h2>
        </>
    )
}

export default FarmDes;