import React from "react";
import './index.less'
import openseaIcon from '../../assets/images/openseaIcon.png'
import twitterIcon from '../../assets/images/twitterIcon.png'
import telegramIcon from '../../assets/images/telegramIcon.png'

const Footer = () => {
    return (
        <div className="FooterWrapper">
            <div className="socialLinkBtnWrapper">
                <div className="socialLinkBtn">
                    <img src={openseaIcon} />
                    <a href={'https://testnets.opensea.io/collection/bsc-orcs-genesispolygon'} target="_blank">OPENSEA</a>
                </div>
                <div className="socialLinkBtn">
                    <img src={twitterIcon} />
                    <a href={'https://twitter.com/bscorcsen/'} target="_blank">TWITTER</a>
                </div>
                <div className="socialLinkBtn">
                    <img src={telegramIcon} />
                    <a href={'https://t.me/bscorcsWD'} target="_blank">TELEGRAME</a>
                </div>
            </div>
            <div className="copyright">Copyright © BSCRORCS 2022.</div>
        </div>
    )
}

export default Footer