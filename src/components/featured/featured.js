import React from 'react'
import './featured.scss'
import Banner from '../banner/banner'

import whiteArrow from '../../assets/right-arrow-white.png'
import BannerFeatured from '../banner/banner-featured'

import ticket from '../../assets/ticket.png'
import Carousel from '../carousel/carousel'

class Featured extends React.Component{



    render(){
        const bannerDatas = [
            {
                key: 1,
                title: "QRen Stiker",
                content: "Solusi teknologi pembayaran berbasis kode QR"
            },
            {
                key: 2,
                title: "QRen Mobile+",
                content: "Solusi pembayaraan kode QR yang dilakukan langsung di aplikasi QRen"
            },
            {
                key: 3,
                title: "QRen Perangkat+",
                content: "Solusi teknologi pembayaran berbasis kode QR melalui perangkat API"
            },
            {
                key: 4,
                title: "QRen Loket Bayar",
                content: "Raih keuntungan tambahan dengan berjualan produk-produk digital seperti pulsa, data, token PLN, dll"
            },
        ]

        const bannerFeaturedDatas={
            key: 1, 
            title: "Tiket",
            text: "Solusi teknologi pembayaran yang diciptakan khusus untuk proses pembelian tiket penyebrangan laut di Bangsal, Lombok Utara",
            bgLeft: ticket
        }

        const bannerComponents = bannerDatas.map(
            banner => <Banner key={banner.key} {...banner} />
        )

        return(
            <div className="featured container">
                <div className="featured-wrapper">
                    <h2 className="text-bold text-uppercase" style={{color:'#333333',textAlign: 'center'}}>ragam solusi transaksi qren</h2>

                    <div className="featured-banner">
                        {bannerComponents}
                    </div>

                    <div className="featured-details">
                        <div className="details-left">
                            <h3 className="text-bold" style={{color:'#4f4f4f',letterSpacing:'0.005em'}}>QRen Memberikan Solusi Pembayaran Untuk Semua Jenis Bisnis</h3>
                            <p className="body1">Seluruh solusi layanan QRen dapat disesuaikan dengan apa pun jenis bisnis Anda. Mulai dari usaha kecil, besar, atau daerah semua bisa makin untung dengan solusi transaksi khusus dari QRen.</p>
                            <button className="btn-primary arrow button">Berikan saya paket khusus<img src={whiteArrow} alt=""></img></button>
                        </div>
                        <div className="details-right">
                            <Carousel />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Featured