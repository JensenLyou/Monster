
import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import { Link, } from 'react-router-dom'
import './index.less';
import { Button, Drawer } from "antd";
import { MenuOutlined } from '@ant-design/icons';
import homeIcon from '../../assets/images/homeIcon.png';
import circleIcon from '../../assets/images/circleIcon.png';


const DrawerMenu = () => {

    const [drawerVisible, setDrawerVisible] = useState(false)
    const { t } = useTranslation()

    const scrollToAnchor = (anchorName) => {
        if (anchorName) {
            // 找到锚点
            let anchorElement = document.getElementById(anchorName);
            // 如果对应id的锚点存在，就跳转到锚点
            if (anchorElement) { anchorElement.scrollIntoView({ block: 'start', behavior: 'smooth' }); }
        }
    }

    const LinkAnchorEle = (anchor, title, icon) => {
        return (
            <Link to='/' className="anchorWrapper" href={anchor} onClick={() => {
                scrollToAnchor(anchor)
                setDrawerVisible(false)
            }}>
                <div style={{ width: '26px', height: '26px' }}><img src={icon} /></div>
                <span >
                    {title}
                </span>
            </Link>
        )
    }

    return (
        <>
            <Button
                className="drawerBtn"
                type="text"
                size="large"
                shape="circle"
                icon={<MenuOutlined
                    style={{ fontWeight: 500, fontSize: '1.5rem' }} />}
                onClick={() => {
                    setDrawerVisible(true)
                }}
            />
            <Drawer
                width='238'
                placement='left'
                closable={false}
                onClose={() => { setDrawerVisible(false) }}
                visible={drawerVisible}
                className='drawerWrapper'
            >
                {LinkAnchorEle('home', t('home.text.home'), homeIcon)}
                {LinkAnchorEle('introduction', t('home.text.introduction'), circleIcon)}
                {LinkAnchorEle('allies', t('home.text.allies'), circleIcon)}
                {LinkAnchorEle('train', t('home.text.train'), circleIcon)}
                {LinkAnchorEle('pillage', t('home.text.pillage'), circleIcon)}
                {LinkAnchorEle('farm', t('home.text.farm'), circleIcon)}
                {LinkAnchorEle('raid', t('home.text.pillage'), circleIcon)}
                {LinkAnchorEle('faq', t('home.text.faq'), circleIcon)}
                {LinkAnchorEle('roadmap', t('home.text.roadmap'), circleIcon)}
                {LinkAnchorEle('team', t('home.text.team'), circleIcon)}
            </Drawer>
        </>
    )
}

export default DrawerMenu