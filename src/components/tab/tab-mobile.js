import React from 'react'
import Slider from 'react-slick'
import './tab-mobile.scss'

class TabMobileContent extends React.Component{
    render(){
        let styleContainer = {
            background: (this.props.id%2) === 0 ? '#ffffff' : '#f2f2f2'
        }

        const settings = {
            className: "slider variable-width",
            arrows: false,
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
            infinite: false,
            adaptiveHeight: true,
        }

        console.log(this.props)

        return(
            <div className="tab-mobile-content" style={styleContainer}>
                <div className="tab-mobile-content-wrapper">
                    <div className="content-title">
                        <h5 className="text-bold">{this.props.text}</h5>
                    </div>

                    <p className="body2">{this.props.bodyText}</p>

                    {this.props.id !==2 ?
                        <div className="__mobile__tab">
                            {this.props.bodyComponents}
                        </div>
                    :
                        <div className="__mobile__tabCarousel">
                            <Slider {...settings}>
                                {this.props.bodyComponents}
                            </Slider>
                        </div>
                    }

                </div>
            </div>
        )
    }
}

class TabMobile extends React.Component{
    
    render(){
        let i = 0

        const TabMobileComponents = this.props.TabDatas.map(
            tab => <TabMobileContent key={tab.key} {...tab} id={i++} />
        )
        return(
            <React.Fragment>
            <div className="container tab-mobile" style={{marginBottom: '0'}}>
                <div className="tab-mobile-wrapper">
                    <h5 className="text-bold">{this.props.title}</h5>
                    <p className="body2">{this.props.caption}</p>
                </div>
            </div>
            {TabMobileComponents}
            </React.Fragment>
        )
    }
}

export default TabMobile