import React from 'react'
import './benefit.scss'
import BenefitComponent from '../benefit-component/benefit-component'

import icShield from '../../assets/ic-shield.png'
import icCart from '../../assets/ic-cart.png'
import icGraph from '../../assets/ic-graph.png'
import icQr from '../../assets/ic-qr.png'
import icRp from '../../assets/ic-rp.png'

import bgQr from '../../assets/qrcode-desc.png'
import bgPhone from '../../assets/phone-desc.png'

class Benefit extends React.Component{
    render(){
        const benefitsData =[
            {
                key: 1,
                title: "Lebih aman dan terpercaya",
                icon: icShield,
                description: "Sistem kami menjamin keamanan dana dan transaksi Anda",
                style:{
                    marginLeft: '30%',
                    position: 'relative',
                    width: '420px'
                }
            },
            {
                key: 2,
                title: "Lebih menguntungkan",
                icon: icRp,
                description: "Dapatkan penghasilan tambahan melalui QRen Loket Bayar",
                style:{
                    marginTop: '3%',
                    marginLeft: '5%',
                    position: 'relative',
                    width: '284px'
                }
            },
            {
                key: 3,
                title: "Lebih banyak pelanggan",
                icon: icCart,
                description: "Cukup satu kode QR dari QRen untuk semua jenis pembayaran dari dompet digital apa pun",
                style:{
                    marginTop: '-10%',
                    marginLeft: '70%',
                    position: 'relative',
                    width: '350px'
                }
            },
            {
                key: 4,
                title: "Lebih terencana dan efisien",
                icon: icGraph,
                description: "Pantau dan kelola riwayat transaksi bisnis Anda melalui dashboard",
                style:{
                    marginTop: '10%',
                    marginLeft: '5%',
                    position: 'relative',
                    width: '420px'
                }
            },
            {
                key: 5,
                title: "Lebih fleksibel",
                icon: icQr,
                description: "Nikmati sistem pembayaran khusus yang dapat disesuaikan dengan kebutuhan model bisnis Anda",
                style:{
                    marginTop: '-8%',
                    marginLeft: '60%',
                    position: 'relative',
                    width: '510px'
                }
            },
        ]

        const benefitComponents = benefitsData.map(
            benefit => <BenefitComponent key={benefit.key} {...benefit} />
        )

        return(
            <div className="container">
                <div className="benefit-title-mobile">
                    <h2 className="text-bold" style={{letterSpacing:'0.005em',marginBottom:'1rem',textAlign: 'center'}}>MAKIN UNTUNG DENGAN 5 KELEBIHAN QREN</h2>
                </div>
                <div className="benefit-bg-qr" style={{backgroundImage:'url('+bgQr+')'}}>
                    <div className="benefit-bg-phone" style={{backgroundImage:'url('+bgPhone+')'}}>
                        <div className="benefit-wrapper">
                            <h2 className="text-bold" style={{letterSpacing:'0.005em',marginBottom:'5rem'}}>MAKIN UNTUNG DENGAN 5 KELEBIHAN QREN</h2>
                            {benefitComponents}
                        </div>
                    </div>
                </div>

                <div className="benefit-content-mobile">
                    {benefitComponents}
                </div>
            </div>
        )
    }
}

export default Benefit