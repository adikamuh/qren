import React from 'react'
import './tab-mobile.scss'

class TabMobileContent extends React.Component{
    render(){
        let styleContainer = {
            background: (this.props.id%2) === 0 ? '#f2f2f2' : '#ffffff'
        }

        return(
            <div className="tab-mobile-content" style={styleContainer}>
                <div className="tab-mobile-content-wrapper">
                    <div className="content-title">
                        <h5 className="text-bold">{this.props.text}</h5>
                    </div>

                    <p className="body2">{this.props.bodyText}</p>

                    {this.props.bodyComponents}

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
            <div className="container tab-mobile">
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