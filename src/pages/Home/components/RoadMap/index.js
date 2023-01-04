import React from "react";
import { useTranslation } from 'react-i18next';
import NodeItem from "./NodeItem";
import coin from '../../../../assets/images/coin.png'
import roadmapMonster from '../../../../assets/images/roadmapMonster.png'
import roadmapRaids from '../../../../assets/images/roadmapRaids.png'
import roadmapAllies from '../../../../assets/images/roadmapAllies.png'
import roadmapDungeon from '../../../../assets/images/roadmapDungeon.png'

import './index.less';

const Roadmap = () => {

    const { t } = useTranslation()

    return (
        <div className="wrap">
            <NodeItem centerEle={<span className="greeNode">{t('home.text.phase')} 1</span>} />

            <NodeItem
                centerEle={<img style={{ marginTop: '70px' }} src={coin} />}
                leftEle={
                    <div className="roadMapDes">
                        <h2>{t('home.text.roadmapTitle1')}</h2>
                        <h3>{t('home.text.roadmapText1')}</h3>
                        <h3>{t('home.text.roadmapText2')}</h3>
                        <h3>{t('home.text.roadmapText3')}</h3>
                    </div>}
                rightEle={<img src={roadmapMonster} />}
            />

            <div style={{ marginTop: '120px' }}>
                <NodeItem centerEle={<span className="orangeNode">{t('header.hallOfChampions')}</span>} />
            </div>

            <NodeItem centerEle={<span className="greeNode">{t('home.text.phase')} 2</span>} />


            <NodeItem
                centerEle={<img style={{ marginTop: '70px' }} src={coin} />}
                leftEle={<img src={roadmapRaids} />}
                rightEle={
                    <div className="roadMapDes">
                        <h2>{t('home.text.roadmapTitle2')}</h2>
                        <h3>{t('home.text.roadmapText4')}</h3>
                    </div>}
            />


            <div style={{ marginTop: '120px' }}>
                <NodeItem centerEle={<span className="orangeNode">{t('home.text.gasSaving')}</span>} />
            </div>


            <NodeItem centerEle={<span className="greeNode">{t('home.text.phase')} 3</span>} />


            <NodeItem
                centerEle={<img style={{ marginTop: '70px' }} src={coin} />}
                leftEle={
                    <div className="roadMapDes">
                        <h2>{t('home.text.roadmapTitle3')}</h2>
                        <h3>{t('home.text.roadmapText5')}</h3>
                        <h3>{t('home.text.roadmapText6')}</h3>
                    </div>}
                rightEle={<img src={roadmapAllies} />}
            />


            <div style={{ marginTop: '160px' }}>
                <NodeItem centerEle={<span className="blueNode">{t('home.text.weAreHere')}</span>} />
            </div>

            <div style={{ marginTop: '-100px' }}>
                <NodeItem centerEle={<span className="orangeNode">{t('home.text.activRadis')}</span>} />
            </div>

            <div style={{ marginTop: '-100px' }}>
                <NodeItem centerEle={<span className="orangeNode">1v1 PVP</span>} />
            </div>

            <div style={{ marginTop: '-100px' }}>
                <NodeItem centerEle={<span className="orangeNode">{t('home.text.merchAndToys')}</span>} />
            </div>

            <div style={{ marginTop: '-100px' }}>
                <NodeItem centerEle={<span className="greeNode">{t('home.text.phase')} 4</span>} />
            </div>

            <NodeItem
                centerEle={<img style={{ marginTop: '70px' }} src={coin} />}
                leftEle={<img src={roadmapDungeon} />}
                rightEle={
                    <div className="roadMapDes">
                        <h2>{t('home.text.roadmapTitle4')}</h2>
                        <h3>{t('home.text.roadmapText7')}</h3>
                        <h3>{t('home.text.roadmapText8')}</h3>
                    </div>}
            />


            <div style={{ marginTop: '160px' }}>
                <NodeItem centerEle={<span className="orangeNode">{t('home.text.battleground')}</span>} />
            </div>


            <div style={{ marginTop: '-100px' }}>
                <NodeItem centerEle={<span className="orangeNode">{t('home.text.customSkin')}</span>} />
            </div>

            <div style={{ marginTop: '-80px' }}>
                <NodeItem centerEle={<span className="greeNode">{t('home.text.phase')} 5</span>} />
            </div>

            <NodeItem
                centerEle={<img style={{ marginTop: '70px' }} src={coin} />}
                leftEle={
                    <div className="roadMapDes">
                        <h2>{t('home.text.roadmapTitle5')}</h2>
                        <h3>{t('home.text.roadmapText9')}</h3>
                        <h3>{t('home.text.roadmapText10')}</h3>
                        <h3>{t('home.text.roadmapText11')}</h3>
                        <h3>{t('home.text.roadmapText12')}</h3>
                        <h3>{t('home.text.roadmapText13')}</h3>
                        <h3>{t('home.text.roadmapText14')}</h3>
                        <h3>{t('home.text.roadmapText15')}</h3>
                        <h3>{t('home.text.roadmapText16')}</h3>
                    </div>}
            />

        </div >
    )
}

export default Roadmap