import {Button, message} from "antd";
import React from "react";
import './index.less'
import openseaIcon from '../../../../../assets/images/openseaIcon.png'
import discordIcon from '../../../../../assets/images/discordIcon.png'
import {useTranslation} from "react-i18next";

const MainTeam = (props) => {
  const {t} = useTranslation()
  const {name, role, jobTile, image} = props

  return (
    <div className="mainTeamCard">
      <h2>{name}</h2>
      <h3>{jobTile}</h3>
      <h3>{role}</h3>
      <Button type="text" onClick={() => {
        message.warn(t('home.text.notOpen'))
      }} icon={<img src={openseaIcon} alt="opensea icon"/>}>Opensea</Button>
      <Button type="text" onClick={() => {
        message.warn(t('home.text.notOpen'))
      }} icon={<img src={discordIcon} alt="discord icon"/>}>Discord</Button>
      <img className="mainTeamNFT" src={image}/>
    </div>
  )
}

export default MainTeam