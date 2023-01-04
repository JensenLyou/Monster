import React from 'react';
import { useTranslation } from 'react-i18next';


const RogueDes = () => {

    const { t } = useTranslation()

    return (
        <>
            <h2>{t('home.text.alliesRogueText1')}</h2>
            <h2>{t('home.text.alliesRogueText2')}</h2>
            <h2>{t('home.text.alliesRogueText3')}</h2>
            <h2>{t('home.text.alliesRogueText4')}</h2>
        </>
    )
}

export default RogueDes;