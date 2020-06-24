import React from 'react'
import './banner-product.scss'

export default function BannerProduct(props){
    return(
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
    )
}