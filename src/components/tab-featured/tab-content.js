import React from 'react'
import './tab-content.scss'

function StepItem(props){
    return(
        <div className={props.isActive === props.id ? 'step-item active' : 'step-item'} >
            
            <button className="number" onClick={() => props.onClick(props.id)}>
                <h5 className="text-bold">{props.id}</h5>
            </button>
            <p className="body1">{props.text}</p>
        </div>
    )
}

function StepLists(props){
    let i = 1

    const StepItemComponents = props.StepDatas.map(
        step => <StepItem key={step.key} {...step} id={i++} onClick={props.onClick} isActive={props.isActive}/>
    )

    // console.log(props.StepDatas)

    return(
        <React.Fragment>
        <div className="mockup" style={{backgroundImage: 'url('+props.appMockup+')'}}></div>
        <div className="step-list">
            <div className="line-vertical"></div>
            {StepItemComponents}
        </div>
        </React.Fragment>
    )
}

class TabContent extends React.Component{
    // constructor(props){
    //     super(props)
    // }

    render(){
        return(
            <div className="container __featured__mobile">
                <div className="content-wrapper">
                    <StepLists StepDatas = {this.props.StepDatas} appMockup={this.props.AppMockup} isActive={this.props.activeStep} onClick={this.props.onClick}/>
                </div>
            </div>
        )
    }
}

export default TabContent