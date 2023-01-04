
import React, { useState } from "react";
import { Select } from "antd";
import store from '../../store/index'
import arrowDownIcon from '../../assets/images/arrowDownIcon.png'
import './index.less'
import i18n from '../../i18n';

const { Option } = Select;

const LanguageSwitch = () => {


    const [_, setChangeLanguageState] = useState('en')


    // 监听state的变化
    store.subscribe(() => {
        setChangeLanguageState(store.getState().language)
    })


    const changeLanguage = (lang) => {
        setChangeLanguageState(lang)
        const action = {
            type: "changeLanguage",
            value: lang
        }
        i18n.changeLanguage(lang)
        store.dispatch(action)
    }


    return (
        <Select
            className="selectLanguageWrapper"
            dropdownClassName="dropMenuWrapper"
            defaultValue={store.getState().language}
            bordered={false}
            showArrow={true}
            placement="bottomRight"
            suffixIcon={<img src={arrowDownIcon} alt='icon' />}
            onSelect={(e) => {
                changeLanguage(e)
            }}
        >
            <Option disabled>Select Language</Option>
            <Option value="en">English</Option>
            <Option value="zh">Chinese</Option>
        </Select>
    )
}

export default LanguageSwitch