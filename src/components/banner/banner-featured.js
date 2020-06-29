import React from 'react'
import './banner-featured.scss'

import bgBanner from '../../assets/bg-banner.png'
import qrenIcon from '../../assets/logo.png'

function BannerFeatured(props){

    const bg = {
        backgroundImage: 'url('+props.bgLeft+')'
    }

    // console.log(bg)
    return(
        <div className="banner-featured-container">
            <div className="section-left"
                style={bg}
            ></div>

            <div className="float-object">
                <img src={qrenIcon} alt=""></img>
            </div>

            <div className="section-right"
                style={{
                    backgroundImage: 'url('+bgBanner+')'
                }}
            >
                <h5 className="text-bold">{props.title}</h5>
                <p className="">{props.text}</p>
            </div>
        </div>
    )
}

export default BannerFeatured