import React from 'react'
import './partner.scss'

import bankNTB from '../../assets/logo/Logo-Bank-NTB-Syariah.png'
import cazh from '../../assets/logo/footer-logo-1.png'
import useetv from '../../assets/logo/logo.png'
import telkomProperty from '../../assets/logo/logo (1) 1.png'
import bankSumut from '../../assets/logo/logo-1.png'
import bonum from '../../assets/logo/logo-11.png'
import bankJateng from '../../assets/logo/logo_1b0bcb08eda167883b7d923c2387670a.png'
import bontang from '../../assets/logo/logo_bme.png'
import tmii from '../../assets/logo/logotmii2.png'
import mango from '../../assets/logo/mango-logo.png'
import qwords from '../../assets/logo/Mask Group.png'
import telkomlt from '../../assets/logo/Mask Group-1.png'
import pigjo from '../../assets/logo/pigijo.png'
import madani from '../../assets/logo/thumb__120_25_0_0_auto.png'
import rspp from '../../assets/logo/unnamed.png'
import interactive from '../../assets/logo/interactive 1.png'

import halo from '../../assets/logo/partner/0_e9aa545a-9e71-42c4-83ae-faa45a9a8beb_700_700 1.png'
import gopay from '../../assets/logo/partner/55911ab77f3122ba31212bdb0dc5ce6c 1.png'
import gemscool from '../../assets/logo/partner/1392880539716_ 1.png'
import mogplay from '../../assets/logo/partner/download 1.png'
import xl from '../../assets/logo/partner/FAVPNG_xl-axiata-axiata-group-telecommunications-vector-graphics-logo_ATuR5NPZ 1.png'
import zgold from '../../assets/logo/partner/Frame 68.png'
import garena from '../../assets/logo/partner/Garena 1.png'
import indihome from '../../assets/logo/partner/indihome 1.png'
import indosat from '../../assets/logo/partner/Indosat_Ooredoo_logo 1.png'
import three from '../../assets/logo/partner/Layer x0020 1.png'
import dana from '../../assets/logo/partner/Logo DANA (PNG-480p) - FileVector69 1.png'
import lyto from '../../assets/logo/partner/Logo-LYTO 1.png'
import pln from '../../assets/logo/partner/Logo_PLN 1.png'
import megaxus from '../../assets/logo/partner/megaxus_640x241 1.png'
import ovo from '../../assets/logo/partner/OVO 1.png'
import smartfren from '../../assets/logo/partner/Smartfren Logo [www.blogovector 1.png'
import steam from '../../assets/logo/partner/steam-logo-transparent 1.png'
import telkomsel from '../../assets/logo/partner/telkomsel-communication-logos-2 1.png'
import wifiID from '../../assets/logo/partner/Wifi 1.png'
import PartnerLogo from '../partner-logo/partner-logo'

class Partner extends React.Component{
    constructor(){
        super()
        this.state = {
            isPartnerOn : false,
            isMerchantOn : true
        }

        this.handleClickPartner = this.handleClickPartner.bind(this)
        this.handleClickMerchant = this.handleClickMerchant.bind(this)
    }

    handleClickPartner(){
        this.setState( (prevState) => {
            return{
                isPartnerOn : true,
                isMerchantOn : false
            }
        })
    }

    handleClickMerchant(){
        this.setState( (prevState) => {
            return{
                isPartnerOn : false,
                isMerchantOn : true
            }
        })
    }
    
    render(){
        const partnerLogos = [
            {key:1, bg: bankNTB},
            {key:2, bg: bankSumut},
            {key:3, bg: bankJateng},
            {key:4, bg: bonum},
            {key:5, bg: cazh},
            {key:6, bg: pigjo},
            {key:7, bg: tmii},
            {key:8, bg: rspp},
            {key:9, bg: mango},
            {key:10, bg: qwords},
            {key:11, bg: madani},
            {key:12, bg: interactive},
            {key:13, bg: telkomProperty},
            {key:14, bg: useetv},
            {key:15, bg: bontang},
            {key:16, bg: telkomlt}
        ]

        const merchantLogos = [
            {key:1, bg: telkomsel},
            {key:2, bg: xl},
            {key:3, bg: smartfren},
            {key:4, bg: three},
            {key:5, bg: indosat},
            {key:6, bg: halo},
            {key:7, bg: wifiID},
            {key:8, bg: indihome},
            {key:9, bg: pln},
            {key:10, bg: dana},
            {key:11, bg: ovo},
            {key:12, bg: gopay},
            {key:13, bg: garena},
            {key:14, bg: gemscool},
            {key:15, bg: steam},
            {key:16, bg: megaxus},
            {key:17, bg: zgold},
            {key:18, bg: lyto},
            {key:19, bg: mogplay},
        ]

        const partnerComponents = partnerLogos.map(
            partner => <PartnerLogo key={partner.key} {...partner} />
        )

        const merchantComponents = merchantLogos.map(
            merchant => <PartnerLogo key={merchant.key} {...merchant} />
        )
        return(
            <div className="partner container">
                <div className="partner-wrapper">
                    <div className="partner-button">
                        <button 
                            className={["text-h5 text-bold", this.state.isMerchantOn && 'active'].filter(x => !!x).join(' ')}
                            onClick={this.handleClickMerchant}
                            
                            >MERCHANT</button>
                        <button 
                            className={["text-h5 text-bold", this.state.isPartnerOn && 'active'].filter(x => !!x).join(' ')}
                            onClick={this.handleClickPartner}
                            >PARTNER</button>
                    </div>
                    <div className="merchant-logo"
                        style={{
                            display: this.state.isMerchantOn ? 'flex' : 'none'
                        }}
                    >
                        {partnerComponents}
                    </div>
                    <div className="partner-logo"
                        style={{
                            display: this.state.isPartnerOn ? 'flex' : 'none'
                        }}
                    >
                        {merchantComponents}
                    </div>
                </div>
            </div>
        )
    }
}

export default Partner