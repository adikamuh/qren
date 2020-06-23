import React from 'react'
import './tab-product.scss'
import Tab from '../tab/tab'

class TabProduct extends React.Component{
    constructor(){
        super()
        this.state = {
            isStickerActive : true,
            isMobileActive : false,
            isPerangkatActive : false,
            isLoketActive : false,
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
        const TabDatas = [
            {   
                key: 1,
                isActive: this.state.isStickerActive,
                handleClick: this.handleClickSticker,
                text: 'QREN STICKER',

                bodyText: 'Media pembayaran berbasis kode QR dengan dua jenis sistem, statis dan dinamis, untuk kemudahan proses transaksi usaha Anda. Dapatkan juga kendali penuh atas pergerakan keluar masuk dana dengan mengakses riwayat transaksi pada layanan dashboard.'
            },
            {
                key: 2,
                isActive: this.state.isMobileActive,
                handleClick: this.handleClickMobile,
                text: 'QREN MOBILE',

                bodyText: 'Media pembayaran berbasis kode QR dengan sistem dinamis. Kode QR dapat langsung diatur dan diaktifkan melalui handphone Anda, sehingga dapat digunakan untuk bertransaksi saat itu juga tanpa perlu melakukan pencetakan.'
            },
            {
                key: 3,
                isActive: this.state.isPerangkatActive,
                handleClick: this.handleClickPerangkat,
                text: 'QREN PERANGKAT+',

                bodyText: 'Penyediaan perangkat dan software pembayaran (API) yang dirancang untuk memudahkan transaksi antara pelanggan dan pemilik bisnis. API dapat diintegrasikan secara khusus dan dapat disesuaikan dengan model bisnis Rekan Usaha QRen'
            },
            {
                key: 4,
                isActive: this.state.isLoketActive,
                handleClick: this.handleClickLoket,
                text: 'QREN LOKET BAYAR',

                bodyText: 'Dapatkan untung tambahan melalui penjualan pulsa, data, token PLN, dan produk digital lainnya.'
            },
        ]
        return(
            <div>
                <Tab btnDatas={TabDatas}/>
            </div>
        )
    }
}

export default TabProduct