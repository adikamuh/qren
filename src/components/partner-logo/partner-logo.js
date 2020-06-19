import React from 'react'

function PartnerLogo(props){
    return(
        <div 
            className="partnerlogo-container"
            style={{
                width: '15%',
                height: '100px',
                margin: '1rem 3rem',
                backgroundImage: 'url('+props.bg+')',
                backgroundRepeat:'no-repeat',
                backgroundSize: 'contain',
                backgroundPosition: 'center'
            }}
        ></div>
    )
}

export default PartnerLogo