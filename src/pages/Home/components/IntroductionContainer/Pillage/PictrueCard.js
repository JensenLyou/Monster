import React from 'react';
import town from '../../../../../assets/images/town.png'
import dungeon from '../../../../../assets/images/dungeon.png'
import gavern from '../../../../../assets/images/gavern.png'
import './index.less'
import { useTranslation } from 'react-i18next';



const PillageCard = () => {

    const { t } = useTranslation()

    return (
        <div className='pillageWrapper'>
            <div className='pillageCard'>
                <img src={town} />
                <div className='textWrapper'>
                    <h2>{t('home.text.pillageTown')}</h2>
                    <h3>{t('home.text.pillageCardText')}</h3>
                </div>
            </div>
            <div className='pillageCard'>
                <img src={dungeon} />
                <div className='textWrapper'>
                    <h2>{t('home.text.pillageDungeon')}</h2>
                    <h3>{t('home.text.pillageCardText1')}</h3>
                </div>
            </div>
            <div className='pillageCard'>
                <img src={gavern} />
                <div className='textWrapper'>
                    <h2>{t('home.text.pillageCavern')}</h2>
                    <h3>{t('home.text.pillageCardText2')}</h3>
                </div>
            </div>
        </div>
    )
}

export default PillageCard;