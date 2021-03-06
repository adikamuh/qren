import React from 'react'
import './description.scss'

import rightArrow from '../../assets/right-arrow-yellow.png'
import womanScan from '../../assets/woman-scan.png'
import qrcode from '../../assets/qrcode-desc.png'
import { Link } from 'react-router-dom'

class Description extends React.Component{
    render(){
        
        const link = {
            color: '#F2C94C',
            lineHeight: '16px',
            letterSpacing: '0.1em'
        }

        const bgQrcode = {
            backgroundImage: 'url('+qrcode+')',
        }

        const bgWoman = {
            backgroundImage: 'url('+womanScan+')'
        }

        return(
            <div className="container">
                <div className="desc-wrapper">
                    <div className="desc-img" style={bgQrcode}>
                        <div className="woman" style={bgWoman}></div>
                    </div>

                    <div className="desc-content">
                        <h3 className="text-bold" >QRen hadir untuk memudahkan proses transaksi dagang, serta meningkatkan potensi bisnis Anda.</h3>
                        <p className="body1">QRen adalah platform kode pembayaran berbasis QR yang sudah berstandar nasional QRIS. Kami berkomitmen untuk memberikan solusi transaksi untuk sistem pembayaran yang lebih mudah dan cepat. Serta dapat disesuaikan dengan apa pun jenis usaha yang Anda miliki.</p>
                        <Link to="" className="button" style={link}>Pelajari lebih lanjut <img src={rightArrow} alt="arrow"></img></Link>
                    </div>

                </div>


                <div className="desc-content-mobile">
                    <p className="body2">QRen adalah platform kode pembayaran berbasis QR yang sudah berstandar nasional QRIS. Kami berkomitmen untuk memberikan solusi transaksi untuk sistem pembayaran yang lebih mudah dan cepat. Serta dapat disesuaikan dengan apa pun jenis usaha yang Anda miliki.</p>
                    <Link to="" className="caption text-bold" style={link}>Pelajari lebih lanjut <img src={rightArrow} alt="arrow"></img></Link>
                </div>


            </div>
        )
    }
}

export default Description