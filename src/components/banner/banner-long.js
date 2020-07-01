import React from 'react'
import './banner-long.scss'

import illustration from '../../assets/product-illustration.png'
import phone from '../../assets/product-phone.png'
import bgqr from '../../assets/qr-featured.png'

class BannerLong extends React.Component{
    render(){
        return(
            <div className="container __bannerLong">
                <div className="banner-long-wrapper">
                    <div className="__bgQr" style={{backgroundImage: 'url('+bgqr+')'}} />
                    <img className="illustration-img" src={illustration} alt=""></img>
                    <img className="phone-img" src={phone} alt=""></img>
                    <div className="content">
                        <p className="text-bold">Bikin usaha semakin untung dengan aneka solusi sistem transaksi bisnis yang mudah dan aman dari QRen. Cukup satu Kode QR untuk dapat terima pembayaran dari seluruh dompet digital dan bank. Lebih banyak melayani pelanggan, lebih untung!</p>
                    </div>
                </div>

                <div className="content-mobile">
                    <p className="body2">Bikin usaha semakin untung dengan aneka solusi sistem transaksi bisnis yang mudah dan aman dari QRen. Cukup satu Kode QR untuk dapat terima pembayaran dari seluruh dompet digital dan bank. Lebih banyak melayani pelanggan, lebih untung!</p>
                </div>
            </div>
        )
    }
}

export default BannerLong