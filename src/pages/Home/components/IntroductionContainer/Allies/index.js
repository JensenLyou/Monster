import React, { useState } from 'react';
import './index.js'
import { useTranslation } from 'react-i18next';
import {Button, message, Modal} from 'antd';
import './index.less'
import openseaIcon from '../../../../../assets/images/openseaIcon.png'


const AlliesCard = (props) => {

    const { image, title, description, modalImage, modalTextEle, modalGif } = props

    const [modalVisible, setModalVisible] = useState(false)

    const { t } = useTranslation()

    return (
        <>
            <div className='alliesCard'>
                <img src={image} />
                <div className='alliesContent'>
                    <h2>{title}</h2>
                    <h3>{description}</h3>
                    <div className='alliesBtnWrapper'>
                        <Button type='primary' onClick={() => setModalVisible(true)}>LEARN MORE</Button>
                        <Button type='primary' icon={<img src={openseaIcon} alt='opensea' />} onClick={() => {message.warn(t('home.text.notOpen'))}}>OPENSEA</Button>
                    </div>
                </div>
            </div>
            <Modal
                width="50%"
                visible={modalVisible}
                footer={null}
                maskClosable={true}
                onCancel={() => setModalVisible(false)}
                closable={false}
                wrapClassName='modalClass'
            >
                <img src={modalImage} />
                {modalTextEle}
                <img src={modalGif} style={{ maxWidth: '30%' }} />
            </Modal>
        </>
    )
}

export default AlliesCard;