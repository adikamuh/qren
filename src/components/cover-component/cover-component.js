import React from 'react'
import './cover-component.scss'

import illustration from '../../assets/illustration-1.png'
import iconPlay from '../../assets/Vector.png'
import iconPs from '../../assets/PlayStore.png'
import { Link } from 'react-router-dom'

class CoverComponent extends React.Component{
    render(){
        return(
            <div className="cover container">
                <div className="cover-wrapper">
                    <h1 className="text-bold" style={{textAlign: 'center'}}>Solusi transaksi praktis,<br></br>untuk maksimalkan potensi bisnis.<br></br>Tinggal scan, semua lancar!</h1>
                    
                    <div className="cover-button">
                        <Link className="button btn-pasive"><img src={iconPlay} alt="Click to play video"></img>PLAY VIDEO</Link>
                        <Link><img src={iconPs} width="200px" alt="Download on PlayStore"></img></Link>
                    </div>

                    <img src={illustration} alt=""></img>
                </div>
            </div>
        )
    }
}

export default CoverComponent