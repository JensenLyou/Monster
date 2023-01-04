import React from "react";
import './index.less'

const NodeItem = (props) => {

    const { leftEle, centerEle, rightEle } = props

    return (
        <div className="box">
            <div className="left">
                {leftEle}
            </div>
            <div className="center">
                {centerEle}
            </div>
            <div className="right">
                {rightEle}
            </div>
        </div>
    )

}

export default NodeItem