import React from "react";
import './index.less'
import { useTranslation } from 'react-i18next';

const FAQCard = () => {
    const { t } = useTranslation()

    return (
        <div className='FAQWrapper'>
            <div className="greyColText">
                {t('home.text.faqText1')}
            </div>
            <div className="offcialText">
                {t('home.text.faqText2')} <a>DISCORD</a> {t('home.text.faqText2-1')}
            </div>
            <div className="offcialLink">
                <a>{t('home.text.faqText3')}</a>
                <a>{t('home.text.faqText4')}</a>
                <a>{t('home.text.faqText5')}</a>
                <a>{t('home.text.faqText6')}</a>
                <a>{t('home.text.faqText7')}</a>
                <a>{t('home.text.faqText8')}</a>
                <a>{t('home.text.faqText9')}</a>
            </div>
            <div className="greyColText">
                {t('home.text.faqText10')}
            </div>
            <div className="offcialText">
                {t('home.text.faqText11')}
            </div>
        </div>
    )
}

export default FAQCard