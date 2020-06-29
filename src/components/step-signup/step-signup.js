import React from 'react'
import './step-signup.scss'

import check from '../../assets/check.png'


export default function StepSignUp(props){
    console.log(props.step[0].isActive)
    return(
        <React.Fragment>
        <div className="number-box">
            <div 
                className={[
                    "number-circle",
                    props.step[0].isActive && 'active',
                    props.step[0].isStepComplete && 'passed'
                ].filter(x => !!x).join(' ')}
            >
                <p className="body2">1</p>
                <img className="number-check" src={check} alt="" />
            </div>

            <div 
                className={[
                    "number-line",
                    props.step[0].isStepComplete && 'active'
                ].filter(x => !!x).join(' ')}
            ></div>

            <div
                className={[
                    "number-circle",
                    props.step[1].isActive && 'active',
                    props.step[1].isStepComplete && 'passed'
                ].filter(x => !!x).join(' ')}
            >
                <p className="body2">2</p>
                <img className="number-check" src={check} alt="" />
            </div>

            <div
                className={[
                    "number-line",
                    props.step[1].isStepComplete && 'active'
                ].filter(x => !!x).join(' ')}
            ></div>
            
            <div
                className={[
                    "number-circle",
                    props.step[2].isActive && 'active',
                    props.step[2].isStepComplete && 'passed'
                ].filter(x => !!x).join(' ')}
            >
                <p className="body2">3</p>
                <img className="number-check" src={check} alt="" />
            </div>

            <div
                className={[
                    "number-line",
                    props.step[2].isStepComplete && 'active'
                ].filter(x => !!x).join(' ')}
            ></div>


            <div
                className={[
                    "number-circle",
                    props.step[3].isActive && 'active',
                    props.step[3].isStepComplete && 'passed'
                ].filter(x => !!x).join(' ')}
            >
                <p className="body2">4</p>
                <img className="number-check" src={check} alt="" />
            </div>
        </div>

        <div className="number-wrapper">
            <p className="text-bold caption">{props.step[0].isActive && 'Pendaftaran Baru'}</p>
            <p className="text-bold caption">{props.step[1].isActive && 'Verifikasi OTP'}</p>
            <p className="text-bold caption">{props.step[2].isActive && 'Buat PIN'}</p>
            <p className="text-bold caption">{props.step[3].isActive && 'Data Toko'}</p>
        </div>
        </React.Fragment>
    )
}