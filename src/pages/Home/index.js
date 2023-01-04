import React from 'react';
import homeBigLogo from '../../assets/images/homeBigLogo.png'
import 'antd/dist/antd.less'
import { message } from "antd";
import './index.less'
import { useTranslation } from 'react-i18next';
import IntroductionContainer from './components/IntroductionContainer';
import IntroDes from './components/IntroductionContainer/Intro/Description'
import IntroCard from './components/IntroductionContainer/Intro/PictrueCard'
import TrainDes from './components/IntroductionContainer/Train/Description'
import TrainCard from './components/IntroductionContainer/Train/PictrueCard'
import PillageDes from './components/IntroductionContainer/Pillage/Description';
import PillageCard from './components/IntroductionContainer/Pillage/PictrueCard';
import FarmDes from './components/IntroductionContainer/Farm/Description';
import FarmCard from './components/IntroductionContainer/Farm/PictrueCard';
import RaidDes from './components/IntroductionContainer/Raid/Description';
import RaidCard from './components/IntroductionContainer/Raid/PictrueCard';
import FAQCard from './components/IntroductionContainer/FAQ';
import AlliesCard from './components/IntroductionContainer/Allies';
import ShamanDes from './components/IntroductionContainer/Allies/ShamanDes';
import OgreDes from './components/IntroductionContainer/Allies/OgreDes';
import RogueDes from './components/IntroductionContainer/Allies/RogueDes';
import Roadmap from './components/RoadMap';
import Team from './components/IntroductionContainer/Team';
import monster5 from '../../assets/images/monster5.png'
import monster6 from '../../assets/images/monster6.png'
import monster7 from '../../assets/images/monster7.png'
import Shaman from '../../assets/images/Shaman.png'
import Ogre from '../../assets/images/Ogre.png'
import Rogue from '../../assets/images/Rogue.png'
import ShamanGif from '../../assets/images/Shaman.gif'
import OgreGif from '../../assets/images/Ogre.gif'
import RogueGif from '../../assets/images/Rogue.gif'



const Home = () => {

    const { t } = useTranslation()

    return (
        <div id='home' className='HomeWrapper'>
            <div className='homeDisplay'>
                <img src={homeBigLogo} />
                <h1>{t('home.title')}</h1>
                <button className='greenBtn' onClick={() => {
                    message.warn(t('home.text.notOpen'))
                }}>{t('home.playGame')}</button>
                <button className='orangeBtn'>
                    <a href='https://bscorcs.xyz/download/BSCOrcs_Dungeons_Litepaper.pdf' target='_blank'>{t('home.litepaper')}</a>
                </button>
            </div>

            <div id='introduction'>
                <IntroductionContainer title={t('home.text.introduction')} description={<IntroDes />} card={<IntroCard />} className="maxWidth900" />
            </div>

            <div id='allies' className='bgColorGrey'>
                <IntroductionContainer title={t('home.text.allies')} />
                <div className='alliesWrapper  maxWidth1583'>
                    <AlliesCard image={monster5} modalImage={Shaman} title={t('home.text.alliesTitle1')} description={t('home.text.alliesText1')} modalTextEle={<ShamanDes />} modalGif={ShamanGif} />
                    <AlliesCard image={monster6} modalImage={Ogre} title={t('home.text.alliesTitle2')} description={t('home.text.alliesText2')} modalTextEle={<OgreDes />} modalGif={OgreGif} />
                    <AlliesCard image={monster7} modalImage={Rogue} title={t('home.text.alliesTitle3')} description={t('home.text.alliesText3')} modalTextEle={<RogueDes />} modalGif={RogueGif} />
                </div>
            </div>

            <div id='train'>
                <IntroductionContainer title={t('home.text.train')} description={<TrainDes />} card={<TrainCard />} />
            </div>

            <div id='pillage' className='bgColorGrey'>
                <IntroductionContainer title={t('home.text.pillage')} description={<PillageDes />} card={<PillageCard />} className="maxWidth900" />
            </div>

            <div id='farm'>
                <IntroductionContainer title={t('home.text.farm')} description={<FarmDes />} card={<FarmCard />} />
            </div>

            <div id='raid' className='bgColorGrey'>
                <IntroductionContainer title={t('home.text.raid')} description={<RaidDes />} card={<RaidCard />} className="maxWidth900" />
            </div>

            <div id='faq'>
                <IntroductionContainer title={t('home.text.faq')} card={<FAQCard />} />
            </div>

            <div id='roadmap' className='bgColorGrey'>
                <IntroductionContainer title={t('home.text.roadmap')} card={<Roadmap />} />
            </div>

            <div id='team'>
                <IntroductionContainer title={t('home.text.team')} card={<Team />} />
            </div>
        </div>
    );

}

export default Home
