import React from 'react'
import './tab.scss'
import TabButton from './tab-button'
import BannerProduct from '../banner/banner-product'

class TabContent extends React.Component{
    render(){
        let styleP = {
            lineHeight: '25px',
            textAlign: 'center',
            letterSpacing: '0.05em',
            color: '#4f4f4f'
        }

        let styleBody = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }

        console.log(this.props)

        return(
            <div>
                <div className="body-text" style={{margin: '0 15%'}}>
                    <p className="body1" style={styleP}>{this.props.bodyText}</p>
                </div>
                <div className="body-banner" style={styleBody}>
                    <BannerProduct />
                    <BannerProduct />
                </div>
            </div>
        )
    }
}

class Tab extends React.Component{
    constructor(){
        super()
    }
    
    render(){
        // console.log(this.props)
        const button = this.props.btnDatas

        const tabButton = button.map(
            tab => <TabButton key={tab.key} {...tab} />
        )

        const tabDatas = button.map(
            body => <TabContent bodyText = {body.bodyText} />
        )

        return(
            <div className="container" style={{marginTop: '10rem'}}>
                <div className="btn-tab-wrapper">
                    {tabButton}
                </div>
                {tabDatas}
            </div>
        )
    }
}

export default Tab