import React from 'react'
import './footer.scss'

import logoFooter from '../../assets/logo-footer.png'
import playstore from '../../assets/PlayStore.png'
import fbIcon from '../../assets/facebook-filled.png'
import igIcon from '../../assets/instagram-outlined.png'

import { Link } from 'react-router-dom'

class Footer extends React.Component{
    render(){
        return(
            <div className="footer-container">
                <div className="footer-wrapper">
                    <img src={logoFooter} alt="Footer logo"></img>
                    
                    <div className="footer-menu">
                        <ul>
                            <li className="caption text-bold">QRen</li>
                            <li className="caption"><Link to="/product">Produk & Bisnis</Link></li>
                            <li className="caption"><Link to="/feature">Fitur & Layanan</Link></li>
                            <li className="caption"><Link to="/promo">Promo</Link></li>
                            <li className="caption"><Link to="/partner">Mitra & Partner</Link></li>
                            <li className="caption"><Link to="/help">Pusat Bantuan</Link></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <ul>
                            <li className="caption text-bold">Contact Us</li>
                            <li className="caption">PT. Telekomunikasi Indonesia Tbk<br></br>Jl. Kebon Sirih Raya No. 12, Jakarta Pusat</li>
                            <li className="caption">Email: customerservice@qren.id<br></br>Phone: +62 21 380-8888</li>
                        </ul>
                    </div>

                    <div className="footer-other">
                        <div className="other">
                            <p className="caption text-bold">Download Sekarang</p>
                            <div className="footer-img">
                                <img className="playstore" src={playstore} style={{margin: '0'}} alt="playstore"></img>
                            </div>
                        </div>
                        <div className="other">
                            <p className="caption text-bold">Follow us</p>
                            <div className="footer-img">
                                <img src={fbIcon} alt="facebook"></img>
                                <img src={igIcon} alt="instagram"></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <p className="overline">Copyright © 2019 QRen. ALL RIGHT RESERVED</p>
                </div>
            </div>
        )
    }
}

export default Footer 