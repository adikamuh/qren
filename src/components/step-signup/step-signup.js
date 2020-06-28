import React from 'react'
import './step-signup.scss'

import check from '../../assets/check.png'


export default function StepSignUp(props){
    return(
        <React.Fragment>
        <div className="number-box">
            <div className="number-circle passed">
                <p className="body2">1</p>
                <img className="number-check" src={check} alt="" />
            </div>
            <div className="number-line active"></div>

            <div className="number-circle active">
                <p className="body2">2</p>
                <img className="number-check" src={check} alt="" />
            </div>
            <div className="number-line"></div>

            
            <div className="number-circle">
                <p className="body2">3</p>
                <img className="number-check" src={check} alt="" />
            </div>
            <div className="number-line"></div>


            <div className="number-circle">
                <p className="body2">4</p>
                <img className="number-check" src={check} alt="" />
            </div>
        </div>

        <div className="number-wrapper">
            <p className="text-bold caption">Pendaftaran Baru</p>
            <p className="text-bold caption">Verifikasi OTP</p>
            <p className="text-bold caption">Buat PIN</p>
            <p className="text-bold caption">Data Toko</p>
        </div>
        </React.Fragment>
    )
}