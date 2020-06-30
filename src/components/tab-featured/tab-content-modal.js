import React from 'react'
import './tab-content.scss'

function StepItem(props){
    // console.log(props)
    return(
        <div className={props.isActive === props.id ? 'step-item active' : 'step-item'}>
            <button className="number" onClick={() => props.onClick(props.id)}>
                <h5 className="text-bold">{props.id}</h5>
            </button>
            <div className="__item">
                <p className="body1">{props.text}</p>
                <div className="button-wrapper" style={{display: props.id === 3 && 'flex'}}>
                    <button className={props.activeMethod === "pendapatan" ? "btn-outlined active" : "btn-outlined"} onClick={() => props.onClickMethod('pendapatan')}>Pendapatan</button>
                    <button className={props.activeMethod === "finpay" ? "btn-outlined active" : "btn-outlined"} onClick={() => props.onClickMethod('finpay')}>Finpay</button>
                    <button className={props.activeMethod === "va" ? "btn-outlined active" : "btn-outlined"} onClick={() => props.onClickMethod('va')}>Virtual Account</button>
                </div>
            </div>
        </div>
    )
}

function StepLists(props){
    let i = 1

    const StepItemComponents = props.StepDatas.map(
        step => <StepItem 
                    key={step.key} 
                    {...step} 
                    id={i++} 
                    onClick={props.onClick} 
                    isActive={props.isActive} 
                    activeMethod={props.activeMethod} 
                    onClickMethod={props.onClickMethod}
                />
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

class TabContentModal extends React.Component{
    // constructor(props){
    //     super(props)
    // }

    render(){
        console.log(this.props)
        return(
            <div className="container __featured__mobile">
                <div className="content-wrapper">
                    <StepLists 
                        StepDatas = {this.props.StepDatas} 
                        appMockup={this.props.AppMockup} 
                        isActive={this.props.activeStep} 
                        activeMethod={this.props.activeMethod} 
                        onClick={this.props.onClick} 
                        onClickMethod={this.props.onClickMethod}
                    />
                </div>
            </div>
        )
    }
}

export default TabContentModal