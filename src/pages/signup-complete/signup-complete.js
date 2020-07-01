import React from 'react'
import './signup-complete.scss'
import {Link} from 'react-router-dom'

import bg from '../../assets/qrbg.png'
import mockup from '../../assets/signup-complete.png'

class SignUpComplete extends React.Component{
    render(){
        return(
            <React.Fragment>
            <div className="contaner top-signup">
                <div className="banner-signup-wrapper">
                    <div className="__qr" style={{backgroundImage: 'url('+bg+')'}} />
                    <div className="banner-signup">
                        <h2 className="text-bold">SELAMAT,<br/>PENDAFTARAN ANDA BERHASIL!</h2>
                    </div>
                    <img src={mockup} alt=""/>
                    <div className="banner-body">
                        <p className="body1">
                            Klik download untuk mulai nikmati sistem pembayaran yang lebih mudah, cepat, aman, dan  menguntungkan dengan QRen!
                        </p>
                        <div className="button-wrapper">
                            <Link className="button btn-primary" to="/play-store">DOWNLOAD</Link>
                            <Link className="button btn-pasive" to="/">KEMBALI KE BERANDA</Link>
                        </div>
                    </div>
                </div>
            </div> 

            <div className="__top-signup">
                <div className="wrapper">
                    <div className="banner-header" style={{backgroundImage: 'url('+bg+')'}}>
                        <img src={mockup} alt="" />
                    </div>

                    <div className="banner-body">
                        <p className="caption text-bold">SELAMAT,<br/>PENDAFTARAN ANDA BERHASIL!</p>
                        <p className="overline">
                            Klik download untuk mulai nikmati sistem pembayaran yang lebih mudah, cepat, aman, dan  menguntungkan dengan QRen!
                        </p>
                    </div>
                </div>

                <div className="button-wrapper">
                    <Link className="button btn-primary" to="/play-store">DOWNLOAD</Link>
                    <Link className="button btn-pasive" to="/">KEMBALI KE BERANDA</Link>
                </div>
            </div>
            </React.Fragment>
        )
    }
}

export default SignUpComplete