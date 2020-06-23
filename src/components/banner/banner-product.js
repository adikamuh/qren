import React from 'react'
import './banner-product.scss'

import sticker1 from '../../assets/product/sticker1.png'
import sticker2 from '../../assets/product/sticker2.png'

export default function BannerProduct(props){
    let style = {
        height: '456px',
        width: '279px'
    }
    return(
        <div className="banner-product-bg" style={style}>
            <div className="banner-product-wrapper">
                <div className="banner-title">
                    <img src={sticker1} alt=""></img>
                    <h3 className="text-bold">QRen Stiker Reguler</h3>
                </div>
                <div className="banner-caption">
                    <p className="caption">Kemudahan proses bayar menggunakan kode QR yang dicetak dan ditempelkan pada kios Anda</p>
                </div>
            </div>
        </div>
    )
}