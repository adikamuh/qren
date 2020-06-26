import React from 'react'
import './tab-product.scss'
import Tab from '../tab/tab'
import BannerProduct from '../banner/banner-product'

import sticker1 from '../../assets/product/sticker1.png'
import sticker2 from '../../assets/product/sticker2.png'
import mobile1 from '../../assets/product/mobile1.png'

import cashier from '../../assets/product/cashier.png'
import edc from '../../assets/product/edc.png'
import edc2 from '../../assets/product/edc2.png'
import bg from '../../assets/product/bg.png'
import phone from '../../assets/product/phone-1.png'
import bgLoket from '../../assets/product/bg-loket.png'
import './banner-perangkat.scss'
import './banner-loket.scss'
import TabMobile from '../tab/tab-mobile'

class BannerPerangkat extends React.Component{
    render(){
        return(
            <div className="banner-perangkat-bg">
                <div className="banner-perangkat-wrapper">

                    <div className="banner-header">
                        <div className="img" style={this.props.style}></div>
                        <h3 className="text-bold" style={{letterSpacing: '0.005em'}}>{this.props.title}</h3>
                    </div>
                    <div className="header-subtitle" style={{backgroundImage: 'url('+bg+')'}}>
                        <h3 className="text-bold mobile" style={{letterSpacing: '0.005em'}}>{this.props.title}</h3>
                        <p className="body2">{this.props.subtitle}</p>
                    </div>

                    <div className="banner-content">
                        <p className="text-bold body2" style={{color: "#ED1C24", fontWeight: 'bold'}}>Dashboard:</p>
                        <p className="body2">{this.props.dashboard}</p>
                        <div className="line"></div>

                        <p className="body2 text-bold" style={{color: "#ED1C24", fontWeight: 'bold'}}>Mesin EDC:</p>
                        <p className="body2">{this.props.mesin}</p>
                        <div className="line"></div>

                        <p className="body2 text-bold" style={{color: "#ED1C24", fontWeight: 'bold'}}>Manajemen/servis EDC:</p>
                        <p className="body2">{this.props.manajemen}</p>
                        <div className="line"></div>

                        <p className="body2 text-bold" style={{color: "#ED1C24", fontWeight: 'bold'}}>Spesifikasi EDC:</p>
                        <p className="body2">{this.props.spesifikasi}</p>
                        <div className="line"></div>

                        <p className="body2 text-bold" style={{color: "#ED1C24", fontWeight: 'bold'}}>Aplikasi EDC:</p>
                        <p className="body2">{this.props.aplikasi}</p>
                    </div>

                </div>
            </div>
        )
    }
}

class BannerLoket extends React.Component{
    render(){
        return(
            <div className="banner-loket-bg">
                <div className="banner-loket-wrapper">
                    
                    <div className="banner-header" style={{backgroundImage: 'url('+bgLoket+')'}}>
                        <img src={this.props.img} alt=""></img>
                        <h3 className="text-bold" style={{color: '#ffffff'}}>{this.props.title}</h3>
                    </div>

                    <div className="banner-content">
                        <p className="body2">{this.props.caption}</p>
                    </div>

                </div>
            </div>
        )
    }
}

class TabProduct extends React.Component{
    constructor(){
        super()
        this.state = {
            isStickerActive : true,
            isMobileActive : false,
            isPerangkatActive : false,
            isLoketActive : false,

            title: 'RAGAM SOLUSI TRANSAKSI QR',
            caption: 'Tiga solusi transaksi bisnis dari QRen hadir untuk seluruh jenis usaha dan dapat disesuaikan dengan model bisnis Anda. Nikmati mudahnya proses pembelian yang lebih aman, dan lebih untung bersama QRen!',
        }

        this.handleClickLoket = this.handleClickLoket.bind(this)
        this.handleClickMobile = this.handleClickMobile.bind(this)
        this.handleClickPerangkat = this.handleClickPerangkat.bind(this)
        this.handleClickSticker = this.handleClickSticker.bind(this)
    }

    handleClickSticker(){
        this.setState({
            isStickerActive : true,
            isMobileActive : false,
            isPerangkatActive : false,
            isLoketActive : false,
        })
    }

    handleClickMobile(){
        this.setState(() => {
            return{
            isStickerActive : false,
            isMobileActive : true,
            isPerangkatActive : false,
            isLoketActive : false,}
        })
    }

    handleClickPerangkat(){
        this.setState({
            isStickerActive : false,
            isMobileActive : false,
            isPerangkatActive : true,
            isLoketActive : false,
        })
    }

    handleClickLoket(){
        this.setState({
            isStickerActive : false,
            isMobileActive : false,
            isPerangkatActive : false,
            isLoketActive : true,
        })
    }

    render(){
        const BannerStickerDatas = [
            {
                key: 1,
                img: sticker1,
                title: "QRen Stiker Reguler",
                caption: "Kemudahan proses bayar menggunakan kode QR yang dicetak dan ditempelkan pada kios Anda",
                styleImg: {
                    position: 'absolute',
                    marginTop: '-80px',
                    marginLeft: '40px'
                },
                styleBody: {
                    height: '456px',
                    width: '279px'
                },
                styleBodyMobile: {
                    height: '313px',
                    width: '194px',
                },
                styleImgMobile: {
                    position: 'absolute',
                    width: '94px',
                    marginTop: '-50px',
                    marginLeft: '30px'
                }
            },
            {
                key: 2,
                img: sticker2,
                title: 'QRen Stiker Donasi',
                caption: 'Bebas berdonasi tanpa biaya admin dengan kode QR khusus untuk penggalangan donasi dari kegiatan nirlaba.',
                styleImg: {
                    position: 'absolute',
                    marginTop: '-100px',
                    marginLeft: '50px'
                },
                styleBody: {
                    height: '456px',
                    width: '279px'
                },
                styleBodyMobile: {
                    height: '313px',
                    width: '194px',
                },
                styleImgMobile: {
                    position: 'absolute',
                    width: '94px',
                    marginTop: '-50px',
                    marginLeft: '30px'
                }
            }
        ]

        const BannerMobileDatas = [
            {
                key: 1,
                img: mobile1,
                title: 'QRen Mobile',
                caption: 'Kode QR yang dapat dibuat dan digunakan langsung di aplikasi mobile QRen sebagai transaksi pembayaran secara praktis',
                styleImg: {
                    position: 'relative',
                    marginTop: '-40px',
                    marginBottom: '20px',
                    marginLeft: '100px'
                },
                styleBody: {
                    height: '445px',
                    width: '503px'
                },
                styleBodyMobile: {
                    height: '274px',
                    width: '265px'
                },
                styleImgMobile: {
                    width: '119px',
                    marginLeft: '50px',
                    marginBottom: '10px'
                }
            }
        ]

        const BannerPerangkatDatas = [
            {
                key: 1,
                style:{
                    backgroundImage: 'url('+cashier+')',
                    height: '180px',
                },
                
                title: 'QRen Lite+',
                subtitle: 'Paket integrasi software API untuk instalasi praktis serta efisien',
                
                dashboard: 'disediakan oleh QRen',
                mesin: 'milik merchant',
                manajemen: 'dilakukan pribadi',
                spesifikasi: '-',
                aplikasi: 'diunduh oleh merchant',
            },
            {
                key: 2,
                style:{
                    backgroundImage: 'url('+edc+')',
                    height: '160px',
                },
                
                title: 'QRen Go+',
                subtitle: 'Paket penyewaan perangkat EDC harian dan intergrasi software API',
                
                dashboard: 'disediakan oleh QRen',
                mesin: 'Sewa harian',
                manajemen: 'Oleh QRen',
                spesifikasi: 'Dual Screen',
                aplikasi: 'diunduh oleh merchant',
            },
            {
                key: 3,
                style:{
                    backgroundImage: 'url('+edc+')',
                    height: '160px',
                },
                
                title: 'QRen Pro+',
                subtitle: 'Paket berisi perangkat EDC, software API, dan layanan servis 24/7 untuk kenyamanan operasional Anda',
                
                dashboard: 'disediakan oleh QRen',
                mesin: 'Beli Perangkat',
                manajemen: 'Oleh QRen',
                spesifikasi: 'Dual Screen',
                aplikasi: 'diunduh oleh merchant',
            },
            {
                key: 4,
                style:{
                    backgroundImage: 'url('+edc2+')',
                    height: '185px',
                },
                
                title: 'QRen Optima+',
                subtitle: 'Paket berisi perangkat canggih dengan OS Android, software API, dan layanan servis 24/7 untuk kenyamanan operasional Anda',
                
                dashboard: 'disediakan oleh QRen',
                mesin: 'Beli Perangkat',
                manajemen: 'Oleh QRen',
                spesifikasi: 'Touch Screen, NFC, Printout',
                aplikasi: 'diunduh oleh merchant',
            },
            {
                key: 5,
                style:{
                    backgroundImage: 'url('+edc2+')',
                    height: '185px',
                },
                
                title: 'QRen Advan+',
                subtitle: 'Paket khusus dengan perangkat dan software yang dapat disesuaikan dengan model bisnis Anda',
                
                dashboard: 'disediakan oleh QRen',
                mesin: 'Beli Perangkat',
                manajemen: 'Oleh QRen',
                spesifikasi: 'Touch Screen, NFC, Printout',
                aplikasi: 'Aplikasi sesuai permintaan merchant',
            },
        ]

        const BannerLoketDatas = [
            {
                key: 1,
                img: phone,
                title: "Payment Point Online Bank (PPOB)",
                caption: "Jadilah Juragan QRen, nikmati penghasilan tambahan! Hanya di QRen Loket Bayar, dari modal kecil bisa raih keuntungan besar dengan berjualan produk-produk digital seperti pulsa, data, token PLN. Dapatkan juga harga modal termurah dan berbagai promo menarik yang dapat menunjang keuntungan penjualan Anda!"
            }
        ]

        const BannerMobileComponents = BannerMobileDatas.map(
            banner => <BannerProduct key={banner.key} {...banner} />
        )

        const BannerStickerComponents = BannerStickerDatas.map(
            banner => <BannerProduct key={banner.key} {...banner} />
        )

        const BannerPerangkatComponents = BannerPerangkatDatas.map(
            banner => <BannerPerangkat key={banner.key} {...banner} />
        )

        const BannerLoketComponents = BannerLoketDatas.map(
            banner => <BannerLoket key={banner.key} {...banner} />
        )

        const TabDatas = [
            {   
                key: 1,
                isActive: this.state.isStickerActive,
                handleClick: this.handleClickSticker,
                text: 'QREN STICKER',

                bodyText: 'Media pembayaran berbasis kode QR dengan dua jenis sistem, statis dan dinamis, untuk kemudahan proses transaksi usaha Anda. Dapatkan juga kendali penuh atas pergerakan keluar masuk dana dengan mengakses riwayat transaksi pada layanan dashboard.',
                bodyComponents: BannerStickerComponents
            },
            {
                key: 2,
                isActive: this.state.isMobileActive,
                handleClick: this.handleClickMobile,
                text: 'QREN MOBILE',

                bodyText: 'Media pembayaran berbasis kode QR dengan sistem dinamis. Kode QR dapat langsung diatur dan diaktifkan melalui handphone Anda, sehingga dapat digunakan untuk bertransaksi saat itu juga tanpa perlu melakukan pencetakan.',
                bodyComponents: BannerMobileComponents
            },
            {
                key: 3,
                isActive: this.state.isPerangkatActive,
                handleClick: this.handleClickPerangkat,
                text: 'QREN PERANGKAT+',

                bodyText: 'Penyediaan perangkat dan software pembayaran (API) yang dirancang untuk memudahkan transaksi antara pelanggan dan pemilik bisnis. API dapat diintegrasikan secara khusus dan dapat disesuaikan dengan model bisnis Rekan Usaha QRen',
                bodyComponents: BannerPerangkatComponents
            },
            {
                key: 4,
                isActive: this.state.isLoketActive,
                handleClick: this.handleClickLoket,
                text: 'QREN LOKET BAYAR',

                bodyText: 'Dapatkan untung tambahan melalui penjualan pulsa, data, token PLN, dan produk digital lainnya.',
                bodyComponents: BannerLoketComponents
            },
        ]

        return(
            <div>
                <div className="tab-product-desktop">
                    <Tab btnDatas={TabDatas} title={this.state.title} caption={this.state.caption}/>
                </div>
                <div className="tab-product-mobile">
                    <TabMobile title={this.state.title} caption={this.state.caption} TabDatas={TabDatas} />
                </div>
            </div>
        )
    }
}

export default TabProduct



