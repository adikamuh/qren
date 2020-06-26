import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './carousel-custom.scss'

import Slider from 'react-slick'
import BannerFeatured from '../banner/banner-featured'
import ticket from '../../assets/ticket.png'
import vending from '../../assets/vending.png'
import parkir from '../../assets/parkir.png'
import pasar from '../../assets/pasar.png'
import pembayaran from '../../assets/pembayaran].png'
import ecommerce from '../../assets/ecommerce.png'

import rightArrow from '../../assets/right-arrow-carousel.png'
import leftArrow from '../../assets/left-arrow-carousel.png'
import dotsActive from '../../assets/Union.png'


class Carousel extends React.Component{
    constructor(props) {
        super(props);

        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }

    next() {
        this.slider.slickNext();
    }

    previous() {
        this.slider.slickPrev();
    }
    

    render(){
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

        const settings = {
            className: "center",
            dots: true,
            speed: 500,
            slideToShow: 1,
            slidesToScroll: 1,
            initialSlide:0,
            infinite: false,
            // centerMode: true,
            // centerPadding: '100px',
            // adaptiveHeight: true,
            // variableWidth: true,
            // lazyLoad: true,

            // appendDots: dots => (
            //     <div 
            //         style={{
            //             // marginTop: '2rem'
            //         }}
            //     >
            //         <ul>{dots}</ul>
            //     </div>
            // ),
            // customPaging: i => (
            //     <div
            //         style={{
            //             width: '16px',
            //             height: '16px',
            //             backgroundColor: '#c4c4c4',
            //             borderRadius: '100%',
            //             marginTop: '2rem'
            //         }}
            //         className="custom-dots"
            //     >
            //     </div>
            // )

            dotsClass: 'button__bar'
        }

        const BannerFeaturedComponents = BannerFeaturedDatas.map(
            banner => <BannerFeatured key={banner.key} {...banner} />
        )

        return(
            <div className="carousel">
                <div className="slider-arrows"
                    style={{
                        position: 'absolute',
                        dots: true,
                        arrows: false,
                        zIndex: '1',
                        display: 'flex',
                        width: '705px',
                        marginTop: '120px',
                        marginLeft: '-30px',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <img 
                        src={leftArrow} 
                        alt="" 
                        onClick={this.previous}
                        style={{cursor: 'pointer'}}
                    ></img>
                    <img 
                        src={rightArrow} 
                        alt="" 
                        onClick={this.next}
                        style={{cursor: 'pointer'}}
                    ></img>
                </div>
                <Slider ref={c => (this.slider = c)} {...settings}>
                    {BannerFeaturedComponents}
                </Slider>
            </div>
        )
    }
}

export default Carousel