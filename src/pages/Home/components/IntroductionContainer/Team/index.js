import React from "react";
import { useTranslation } from 'react-i18next';
import MainTeam from "./MainTeam";
import WRANGLER from '../../../../../assets/images/WRANGLER.png'
import VirtualJohn from '../../../../../assets/images/VirtualJohn.png'
import POOF from '../../../../../assets/images/POOF.png'
import Jakers from '../../../../../assets/images/Jakers.png'

const Team = () => {

    const { t } = useTranslation()

    return (<div className="TeamCard">
        <MainTeam name="Aaron" jobTitle="co-Founder" role={t('home.text.projectLeader')} image={WRANGLER} />
        <MainTeam name="Bowen" jobTitle="co-Founder" role={t('home.text.productManager')} image={POOF} />
        <MainTeam name="Karma" jobTitle="co-Founder" role={t('home.text.contractEngineer')} image={VirtualJohn} />
        <MainTeam name="Jassen" jobTitle="co-Founder" role={t('home.text.FrontEngineer')} image={Jakers} />
    </div>)
}

export default Team