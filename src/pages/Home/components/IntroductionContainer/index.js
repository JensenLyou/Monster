import React from "react";
import './index.less'

const IntroductionContainer = (props) => {

    const { title, description = null, card = null, className = '' } = props

    return (
        <div className={`IntroductionWrapper ${className}`}>
            <h1>{title}</h1>
            {description}
            {card ? <div className="PictrueCard">
                {card}
            </div> : null}

        </div>
    )
}

export default IntroductionContainer