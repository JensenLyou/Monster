import React, { useState } from 'react'
import './index.less'
import logoImg from '../../assets/images/logo.png'
import openseaIcon from '../../assets/images/openseaIcon.png'
import twitterIcon from '../../assets/images/twitterIcon.png'
import telegramIcon from '../../assets/images/telegramIcon.png'
import { Link } from 'react-router-dom'
import LanguageSwitch from '../LanguageSwitch'
import DrawerMenu from '../DrawerMenu'
import { useTranslation } from 'react-i18next'
import { connect, mint, changeName, payTribute } from '../../utils/setupWallet'
import { message } from "antd";

const Header = () => {
  const [connectInfo, setConnectInfo] = useState({})
  const { t } = useTranslation()
  const urlParams = new URL(window.location.href)
  const pathname = urlParams?.pathname

  return (
    <div className="HeaderContainer">
      <div className="HeaderWrapper">
        <Link to="/" className="logoLink">
          <div className='testNetBox'>TestNet</div>
          <img src={logoImg} alt="logo" />
        </Link>
        <div className="middleWrapper">
          <a onClick={() => { message.warn(t('home.text.notOpen')) }}>
            {t('header.docs')}
          </a>
          <a onClick={() => { message.warn(t('home.text.notOpen')) }}>{t('header.analytics')}</a>
          <a onClick={() => { message.warn(t('home.text.notOpen')) }}>{t('header.merchandise')}</a>
          <Link to="/hallOfChampions">{t('header.hallOfChampions')}</Link>
        </div>
        <div className="endWrapper">
          {pathname.includes('hallOfChampions') ? (
            <button
              className="connectWalletBtn"
              onClick={async () => {
                const connectObj = await connect()
                setConnectInfo(connectObj)
              }}
            >
              {connectInfo.address ? connectInfo.address : t('header.connectWallet')}
            </button>
          ) : (
            <div className="socialBtnLinkWrapper">
              <div className="socialBtnLink">
                <img src={openseaIcon} />
                <a
                  href={'https://testnets.opensea.io/collection/bsc-orcs-genesispolygon'} target="_blank"
                >
                  OPENSEA
                </a>
              </div>
              <div className="socialBtnLink">
                <img src={twitterIcon} />
                <a
                  onClick={() => {
                    console.log('opeTWITTERnsea')
                  }}
                  href={'https://twitter.com/bscorcsen'}
                  target="_blank"
                >
                  TWITTER
                </a>
              </div>
              <div className="socialBtnLink">
                <img src={telegramIcon} />
                <a
                  onClick={() => {
                    console.log('discord')
                  }}
                  href={'https://t.me/bscorcsWD'} target="_blank"
                >
                  TELEGRAME
                </a>
              </div>
            </div>
          )}

          <LanguageSwitch />
        </div>
      </div>
      <DrawerMenu className="drawerFloatBtn" />
    </div>
  )
}

export default Header
