import React from 'react'
import './banner.scss'

import bgBanner from '../../assets/bg-banner.png'

function Banner(props){
    return(
        <div className="banner-container">
            <div className="banner-wrapper">
                <div className="banner-title">
                    <h4 className="text-bold">{props.title}</h4>
                </div>
                <div className="banner-content" style={{backgroundImage: 'url('+bgBanner+')'}}>
                    <p className="body2">{props.content}</p>
                </div>
            </div>
        </div>
    )
}

export default Banner