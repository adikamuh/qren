import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './carousel-custom.scss'

import Slider from 'react-slick'
import BannerFeatured from '../banner/banner-featured'
import ticket from '../../assets/ticket.png'
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
        const bannerFeaturedDatas={
            key: 1, 
            title: "Tiket",
            text: "Solusi teknologi pembayaran yang diciptakan khusus untuk proses pembelian tiket penyebrangan laut di Bangsal, Lombok Utara",
            bgLeft: ticket
        }

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
                <BannerFeatured {...bannerFeaturedDatas} />
                <BannerFeatured {...bannerFeaturedDatas} />
                <BannerFeatured {...bannerFeaturedDatas} />
            </Slider>
            </div>
        )
    }
}

export default Carousel