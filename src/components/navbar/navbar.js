import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'

import navLogo from '../../assets/logo.png'
import iconProfile from '../../assets/ic_profile.png'
import menuBars from '../../assets/Open.png'

class Navbar extends React.Component{
    render(){
        return(
            <div className="nav">
                <nav>
                    <Link to="/"><img src={navLogo} alt="Logo"></img></Link>
                    <ul className="nav-list">
                        <li className="nav-item caption"><Link to="/product">PRODUK & BISNIS</Link></li>
                        <li className="nav-item caption"><Link >FITUR & LAYANAN</Link></li>
                        <li className="nav-item caption"><Link >PROMO</Link></li>
                        <li className="nav-item caption"><Link >MITRA & PARTNER</Link></li>
                        <li className="nav-item caption"><Link >PUSAT BANTUAN</Link></li>
                    </ul>
                    <div className="nav-right">
                        <div>
                            <Link className="login" ><img src={iconProfile} alt=""></img>LOGIN</Link>
                        </div>
                        <button className="btn-primary button text-uppercase">DOWNLOAD</button>
                    </div>
                    <button className="menu-mobile"><img src={menuBars} alt=""></img></button>
                </nav>
            </div>
        )
    }
}

export default Navbar