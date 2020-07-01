import React from 'react'
import { Link } from 'react-router-dom'
import './featured.scss'
import scanqr from '../../assets/scanqr.png'
import iconPlay from '../../assets/whiteArrow.png'
import TabFeatured from '../../components/tab-featured/tab-featured'

function BannerCoverFeatured(props){
    return(
        <div className="container __bannerFeatured" style={{marginTop: '10rem'}}>
            <div className="banner-long-featured-wrapper">
                <img className="illustration-img" src={props.illustration} alt=""></img>
                <div className="content">
                    <h1 className="text-bold">{props.title}</h1>
                    <Link to="" className="button btn-pasive"><img src={iconPlay} alt="Click to play video"></img>PLAY VIDEO</Link>
                </div>
                
            </div>

            {/* <div className="content-mobile">
                <p className="body2">Bikin usaha semakin untung dengan aneka solusi sistem transaksi bisnis yang mudah dan aman dari QRen. Cukup satu Kode QR untuk dapat terima pembayaran dari seluruh dompet digital dan bank. Lebih banyak melayani pelanggan, lebih untung!</p>
            </div> */}
        </div>
    )
}

class Featured extends React.Component{
    render(){
        let BannerDatas = {
            title : 'Langkah Mudah Transaksi Menggunakan QRen',
            illustration : scanqr
        }

        return(
            <React.Fragment>
                <BannerCoverFeatured {...BannerDatas} />
                <TabFeatured />
            </React.Fragment>
        )
    }
}

export default Featured