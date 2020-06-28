import React from 'react'
import './login.scss'

import loginBg from '../../assets/login-bg.png'
import bgQr from '../../assets/bg-qr-left.png'
import { Link } from 'react-router-dom'

class Login extends React.Component{
    render(){
        return(
            <div className="login container">
                <div className="login-bg" style={{backgroundImage: 'url('+loginBg+')'}}>
                    <h4 className="text-bold">Gabung di QRen<br></br>Untuk Nikmati Kemudahan bertransaksi<br></br>Agar Usaha Makin Untung!</h4>
                </div>
                <div className="login-form" style={{backgroundImage: 'url('+bgQr+')'}}>
                    <h3 className="text-bold">LOGIN</h3>
                    <p className="sub2">Selamat datang kembali</p>
                    <form>
                        <div className="form-group">
                            <input type="text" placeholder="Nomor Handphone"></input>
                        </div>
                        <div className="form-group">
                            <input type="password" placeholder="Pin"></input>
                        </div>
                        <small className="body2 text-bold">Lupa Pin?</small>
                        <div className="form-group-check">
                            <input type="checkbox" ></input>
                            <h5>Captcha</h5>
                        </div>
                        <div className="form-group">
                            <p className="caption">Belum punya akun QRen?</p>
                            <Link to="/signup">GABUNG DISINI</Link>
                        </div>
                        <input type="submit" className="button btn-primary" value="MASUK"></input>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login