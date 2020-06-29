import React from 'react'
import Slider from 'react-slick'
import './cover-component.scss'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import illustration from '../../assets/illustration-1.png'
import leftArrow from '../../assets/right-arrow-grey.png'
import iconPlay from '../../assets/Vector.png'
import iconPs from '../../assets/PlayStore.png'
import carousel2 from '../../assets/carousel2.png'
import carouselMobile from '../../assets/ccover-mobile.png'
import { Link } from 'react-router-dom'

function Arrows(props){
    // console.log(props.previous)
    return(
        <div className="__slider_arrows"
            style={{
                position: 'absolute',
                zIndex: '1',
                width: '100vw',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 3rem',
                marginTop: '13rem',
                boxSizing: 'border-box'
            }}
        >
            <img src={leftArrow}
                alt="" 
                style={{
                    cursor: 'pointer'
                }}
                onClick={props.previous}
                />
            <img src={leftArrow} 
                style={{
                    transform: 'rotate(180deg)',
                    cursor: 'pointer'
                }}
                onClick={props.next}
                alt="" />
        </div>
    )
}

function Slider1(){
    return(
        <div className="cover">
            <div className="cover-wrapper">
                <h1 className="text-bold" style={{textAlign: 'center'}}>Solusi transaksi praktis,<br></br>untuk maksimalkan potensi bisnis.<br></br>Tinggal scan, semua lancar!</h1>
                
                <div className="cover-button">
                    <Link className="button btn-pasive"><img src={iconPlay} alt="Click to play video"></img>PLAY VIDEO</Link>
                    <Link><img className="playstore" src={iconPs} width="200px" alt="Download on PlayStore"></img></Link>
                </div>

                <img className="illustration1" src={illustration} alt=""></img>
            </div>
        </div>
    )
}

class CoverComponent extends React.Component{
    constructor(props){
        super(props)

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
        const settings = {
            dots: true,
            className: '',
            dotsClass: 'button__bar __cover',
            // arrows: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            // variableWidth: true,
        };
        return(
            <div className="top __carousel">
                <Arrows next={this.next} previous={this.previous} />
                <Slider ref={c => (this.slider = c)} {...settings}>
                    <Slider1 />
                    <div>
                        <img className="__slider2" src={carousel2} alt="" />
                        <img className="__slider2_mobile" src={carouselMobile} alt="" />
                    </div>
                </Slider>
            </div>
        )
    }
}

export default CoverComponent