import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './carousel-custom.scss'

import Slider from 'react-slick'
import BannerFeatured from '../banner/banner-featured'


import rightArrow from '../../assets/right-arrow-carousel.png'
import leftArrow from '../../assets/left-arrow-carousel.png'

class Carousel extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            currentSlide: 0,
            leftArrowCondition: false,
        }

        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.updateCurrentSlide = this.updateCurrentSlide.bind(this)
        this.updateLeftArrow = this.updateLeftArrow.bind(this)
    }

    updateLeftArrow(){ 
        console.log(this.state.leftArrowCondition)
        this.setState(prevState => {
            return{
                leftArrowCondition: !prevState.leftArrowCondition
            }
        })
    }

    updateCurrentSlide = current => {
        console.log(current)
        this.setState({currentSlide: current})
    }

    next() {
        this.slider.slickNext();
    }

    previous() {
        this.slider.slickPrev();
    }
    

    render(){


        const settings = {
            className: "center",
            dots: true,
            speed: 500,
            slideToShow: 1,
            slidesToScroll: 1,
            initialSlide:0,
            infinite: false,
            afterChange: this.updateCurrentSlide,

            dotsClass: 'button__bar'
        }

        const BannerFeaturedComponents = this.props.BannerFeaturedDatas.map(
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
                        className={this.state.currentSlide === 0 ? 'fadeOut' : 'fadeIn'}
                        src={leftArrow} 
                        alt="" 
                        onClick={this.previous}
                        style={{cursor: 'pointer'}}
                    ></img>
                    <img 
                        className={this.state.currentSlide === 5 ? 'fadeOut' : 'fadeIn'}
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