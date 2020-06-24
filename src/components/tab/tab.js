import React from 'react'
import './tab.scss'
import TabButton from './tab-button'

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
            marginTop: '5rem'
        }

        return(
            <div>
                <div className="body-text" style={{margin: '0 15%'}}>
                    <p className="body1" style={styleP}>{this.props.bodyText}</p>
                </div>
                <div className="body-banner" style={styleBody}>
                    {this.props.bodyComponents}
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
            body => (
                <div className={body.isActive ? 'tab-content-actve' : 'tab-content'}>
                    <TabContent bodyText = {body.bodyText} bodyComponents = {body.bodyComponents} />
                </div>
            )
        )

        let styleTitle = {
            lineHeight: '45px',
            textAlign: 'center',
            letterSpacing: '0.005em',
            color: '#333333'
        }

        let styleCaption = {
            fontSize: '18px',
            lineHeight: '25px',
            textAlign: 'center',
            letterSpacing: '0.05em',
            color: '#4f4f4f'
        }

        let styleContainer = {
            background: '#f8f8f8',
            marginTop: '0',
            marginBottom: '0',
            padding: '7rem 0'
        }

        return(
            <div className="container" style={styleContainer}>

                <div className="tab-title" style={{margin: '5rem 8%'}}>
                    <h2 className="text-bold" style={styleTitle}>{this.props.title}</h2>
                    <p className="body1" style={styleCaption}>{this.props.caption}</p>
                </div>

                <div className="btn-tab-wrapper">
                    {tabButton}
                </div>
                    {tabDatas}
            </div>
        )
    }
}

export default Tab