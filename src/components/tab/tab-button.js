import React from 'react'
import './tab-button.scss'

function TabButton(props){
    return(
        <button 
        className={["text-h5 text-bold btn-tab", props.isActive && 'btn-tab-active'].filter(x => !!x).join(' ')}
        onClick={props.handleClick}
        >
            {props.text}
        </button>
    )
}

export default TabButton