import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'

import navLogo from '../../assets/logo.png'
import iconProfile from '../../assets/ic_profile.png'
import iconProfileMobile from '../../assets/ic_profile_white.png'
import menuBars from '../../assets/Open.png'
import bgNavMobile from '../../assets/bg-nav-mobile.png'
import close from '../../assets/close.png'

function NavMobile(props){
    // console.log(props.navClose)

    return(
        <div className={[
            "nav__mobile",
            props.isNavOpen ? 'fadeIn zIn' : 'fadeOut zOut'
        ].filter(x => !!x).join(' ')} >
            <div className="nav__mobile-wrapper" style={{backgroundImage: 'url('+bgNavMobile+')'}}>
                <ul className="__mobile_list">
                    <li className="body2"><Link to="/">HOME</Link></li>
                    <li className="body2"><Link to="/product">PRODUK & BISNIS</Link></li>
                    <li className="body2"><Link to="/featured">FITUR & LAYANAN</Link></li>
                    <li className="body2"><Link>PROMO</Link></li>
                    <li className="body2"><Link>MITRA & PARTNER</Link></li>
                    <li className="body2"><Link>PUSAT BANTUAN</Link></li>
                </ul>
                <div className="__close">
                    <button className="button" onClick={props.navClose}><img src={close} alt="" /></button>
                </div>

                <Link className="login" to="/login"><img src={iconProfileMobile} alt=""></img>LOGIN</Link>
                <Link className="__download text-bold">DOWNLOAD</Link>
            </div>
        </div>
    )
}

class Navbar extends React.Component{
    constructor(){
        super()
        
        this.state = {
            isNavOpen: false
            
        }

        this.navOpen = this.navOpen.bind(this)
        this.navClose = this.navClose.bind(this)
    }

    navOpen(){
        // console.log('clicked')
        this.setState({isNavOpen: true})
    }
    navClose(){
        // console.log('clicked close')
        this.setState({isNavOpen:false})
    }

    render(){
        // console.log(this.state.isNavOpen)

        return(
            <React.Fragment>
            <NavMobile isNavOpen={this.state.isNavOpen} navClose={this.navClose} />
            <div className="nav">
                <nav>
                    <Link to="/"><img src={navLogo} alt="Logo"></img></Link>
                    <ul className="nav-list">
                        <li className="nav-item caption"><Link to="/product">PRODUK & BISNIS</Link></li>
                        <li className="nav-item caption"><Link to="/featured">FITUR & LAYANAN</Link></li>
                        <li className="nav-item caption"><Link to="">PROMO</Link></li>
                        <li className="nav-item caption"><Link to="">MITRA & PARTNER</Link></li>
                        <li className="nav-item caption"><Link to="">PUSAT BANTUAN</Link></li>
                    </ul>
                    <div className="nav-right">
                        <div>
                            <Link className="login" to="/login"><img src={iconProfile} alt=""></img>LOGIN</Link>
                        </div>
                        <button className="btn-primary button text-uppercase">DOWNLOAD</button>
                    </div>
                    <button className="menu-mobile" onClick={this.navOpen}><img src={menuBars} alt=""></img></button>
                </nav>
            </div>
            </React.Fragment>
        )
    }
}

export default Navbar