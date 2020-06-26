import React from 'react'
import './banner-product.scss'

export default function BannerProduct(props){
    return(
        <React.Fragment>
        <div className="banner-product-bg" style={props.styleBody}>
            <div className="banner-product-wrapper">
                <div className="banner-title">
                    <img src={props.img} style={props.styleImg} alt=""></img>
                    <h3 className="text-bold">{props.title}</h3>
                </div>
                <div className="banner-caption">
                    <p className="caption">{props.caption}</p>
                </div>
            </div>
        </div>

        <div className="banner-product-mobile" style={props.styleBodyMobile}>
            <div className="banner-product-wrapper">
                <div className="banner-title">
                    <img src={props.img} style={props.styleImgMobile} alt=""></img>
                    <h5 className="text-bold">{props.title}</h5>
                </div>
                <div className="banner-caption">
                    <p className="overline">{props.caption}</p>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}