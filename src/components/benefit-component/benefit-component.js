import React from 'react'
import './benefit-component.scss'

function BenefitComponent(props){
    return(
        <React.Fragment>
        <div className="benefit-component" style={props.style}>
            <img src={props.icon} alt="icon"></img>
            <div className="benefit-text">
                <h4 className="text-bold">{props.title}</h4>
                <p className="body1">{props.description}</p>
            </div>
        </div>

        <div className="benefit-component-mobile">
            <h4 className="text-bold">{props.title}</h4>
            <p className="body1">{props.description}</p>
        </div>
        </React.Fragment>
    )
}

export default BenefitComponent