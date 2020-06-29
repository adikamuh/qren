import React from 'react'
import Slider from 'react-slick'
import './featured.scss'
import Banner from '../banner/banner'
import BannerFeatured from '../banner/banner-featured'

import whiteArrow from '../../assets/right-arrow-white.png'
import ticket from '../../assets/ticket.png'
import vending from '../../assets/vending.png'
import parkir from '../../assets/parkir.png'
import pasar from '../../assets/pasar.png'
import pembayaran from '../../assets/pembayaran].png'
import ecommerce from '../../assets/ecommerce.png'
// import BannerFeatured from '../banner/banner-featured'

// import ticket from '../../assets/ticket.png'
import Carousel from '../carousel/carousel'

class Featured extends React.Component{



    render(){
        const bannerDatas = [
            {
                key: 1,
                title: "QRen Stiker",
                content: "Solusi pembayaran berbasis kode QR yang dilakukan di kios melalui QRIS cetak"
            },
            {
                key: 2,
                title: "QRen Mobile",
                content: "Solusi pembayaraan kode QR yang dilakukan langsung di aplikasi QRen"
            },
            {
                key: 3,
                title: "QRen Perangkat",
                content: "Solusi teknologi pembayaran berbasis kode QR melalui perangkat API",
                plus: true
            },
            {
                key: 4,
                title: "QRen Loket Bayar",
                content: "Raih keuntungan tambahan dengan berjualan produk-produk digital seperti pulsa, data, token PLN, dll"
            },
        ]

        const BannerFeaturedDatas=[
            {
                key: 1, 
                title: "Tiket",
                text: "Solusi teknologi pembayaran yang diciptakan khusus untuk proses pembelian tiket penyebrangan laut di Bangsal, Lombok Utara",
                bgLeft: ticket
            },
            {
                key: 2, 
                title: "Vending Machine",
                text: "Teknologi pembayaran untuk vending machine yang dibuat dan diintegrasikan secara khusus dengan model bisnis dan perangkat dari brand. Saat ini tersedia di Monas.",
                bgLeft: vending
            },
            {
                key: 3, 
                title: "Parkir",
                text: "Solusi pembayaran tiket parkir gedung atau pada lahan parkir, yang telah terintegrasi dengan Secure Parking yang berada di Telkom Landmark Tower dan jalan di daerah Solo",
                bgLeft: parkir
            },
            {
                key: 4, 
                title: "Retribusi Pasar",
                text: "Solusi pembayaran retribusi pasar yang bekerjasama dengan Pemda Solo dan Bank Jateng ini telah diintegrasikan secara khusus ke sistem backend pasar",
                bgLeft: pasar
            },
            {
                key: 5, 
                title: "Pembayaran Tagihan Langganan",
                text: "Solusi pembayaran tagihan langganan Gas Migas Bontang untuk masyarakat seputar kota Bontang menggunakan QRIS dan aplikasi uang elektronik",
                bgLeft: pembayaran
            },
            {
                key: 6, 
                title: "Integrasi Sistem Pembayaran E-commerce",
                text: "Solusi pembayaran QR yang dapat diintergrasikan langsung ke sistem e-commerce yg telah ada seperti Bonum. Umumnya produk ini digunakan pada aplikasi e-commerce yang saling terhubung dan menjadi hub seperti SAKOO, DigiHotel, dan aplikasi lainnya.",
                bgLeft: ecommerce
            },
        ]

        // const bannerFeaturedDatas={
        //     key: 1, 
        //     title: "Tiket",
        //     text: "Solusi teknologi pembayaran yang diciptakan khusus untuk proses pembelian tiket penyebrangan laut di Bangsal, Lombok Utara",
        //     bgLeft: ticket
        // }

        const BannerFeaturedComponents = BannerFeaturedDatas.map(
            banner => <BannerFeatured key={banner.key} {...banner} />
        )

        const bannerComponents = bannerDatas.map(
            banner => <Banner key={banner.key} {...banner} />
        )

        const settings ={
            className: "slider variable-width",
            arrows: false,
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
            infinite: false
        }

        return(
            <div className="featured container">
                <div className="featured-wrapper">
                    <h2 className="text-bold text-uppercase" style={{color:'#333333',textAlign: 'center'}}>ragam solusi transaksi qren</h2>

                    <div className="featured-banner">
                        {bannerComponents}
                    </div>

                    <div className="__mobile__featured-banner">
                        <Slider {...settings}>
                            {bannerComponents}
                        </Slider>
                    </div>

                    <div className="featured-details">
                        <div className="details-left">
                            <h3 className="text-bold" style={{color:'#4f4f4f',letterSpacing:'0.005em'}}>QRen Advan<span style={{color: '#FF7A00'}}>+</span><br />Solusi Pembayaran Untuk Semua Jenis Bisnis</h3>
                            <p className="body1">Paket khusus adalah solusi transaksi khusus dari QRen, yang dapat disesuaikan dengan apa pun jenis bisnis Anda. Mulai dari usaha kecil, besar, atau daerah semua bisa makin untung dengan solusi transaksi khusus dari QRen.</p>

                            <div className="__mobile__carousel">
                                <Slider {...settings}>
                                    {BannerFeaturedComponents}
                                </Slider>
                            </div>

                            <button className="btn-primary arrow button">Berikan saya paket khusus<img src={whiteArrow} alt=""></img></button>
                        </div>
                        <div className="details-right">
                            <Carousel BannerFeaturedDatas={BannerFeaturedDatas}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Featured