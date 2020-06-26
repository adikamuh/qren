import React from 'react'
import './tab-featured.scss'
import Tab from '../tab/tab'
import TabContent from './tab-content'

import appMockup1 from '../../assets/featured/11.png'
import appMockup2 from '../../assets/featured/12.png'
import appMockup3 from '../../assets/featured/13.png'
import appMockup4 from '../../assets/featured/14.png'
import appMockup5 from '../../assets/featured/15.png'
import appMockup6 from '../../assets/featured/16.png'

class TabFeatured extends React.Component{
    constructor(){
        super()

        this.state = {
            isTransaksiActive: true,
            isModalActive: false,
            isTarikActive: false,
            isLoketActive: false,
            activeStep: 1,
        }

        this.handleClickTransaksi = this.handleClickTransaksi.bind(this)
        this.handleClickTarik = this.handleClickTarik.bind(this)
        this.handleClickModal = this.handleClickModal.bind(this)
        this.handleClickLoket = this.handleClickLoket.bind(this)
        this.handleClickStep = this.handleClickStep.bind(this)
    }

    handleClickStep(id){
        this.setState({activeStep: id})
    }

    handleClickTransaksi(){
        this.setState({
            isTransaksiActive: true,
            isModalActive: false,
            isTarikActive: false,
            isLoketActive: false,
        })
    }

    handleClickModal(){
        this.setState({
            isTransaksiActive: false,
            isModalActive: true,
            isTarikActive: false,
            isLoketActive: false,
        })
    }

    handleClickTarik(){
        this.setState({
            isTransaksiActive: false,
            isModalActive: false,
            isTarikActive: true,
            isLoketActive: false,
        })
    }

    handleClickLoket(){
        this.setState({
            isTransaksiActive: false,
            isModalActive: false,
            isTarikActive: false,
            isLoketActive: true,
        })
    }

    
    render(){
        let AppMockup = [
            appMockup1,appMockup2,appMockup3,appMockup4,appMockup5,appMockup6
        ]

        const StepTransaksiDatas = [
            {
                key: 1,
                text: 'Buka aplikasi QRen',
                isActive: this.state.activeStep,
                onClick: this.handleClickStep,
            },
            {
                key: 2,
                text: 'Klik “Transaksi QR” ',
                isActive: this.state.activeStep,
                onClick: this.handleClickStep,
            },
            {
                key: 3,
                text: 'Lalu klik “Input harga”, masukan nominal harga yang harus dibayarkan',
                isActive: this.state.activeStep,
                onClick: this.handleClickStep,
            },
            {
                key: 4,
                text: 'Setelah QR Code muncul, Selanjutnya tunjukan QR Code kepada pembeli  agar dapat dipindai',
                isActive: this.state.activeStep,
                onClick: this.handleClickStep,
            },
            {
                key: 5,
                text: 'Setelah QR Code dipindai, tunggu sampai muncul layar “Bukti Pembayaran” ',
                isActive: this.state.activeStep,
                onClick: this.handleClickStep,
            },
            {
                key: 6,
                text: 'Transaksi sukses!',
                isActive: this.state.activeStep,
                onClick: this.handleClickStep,
            },
        ]

        const transaksiComponents = <TabContent StepDatas={StepTransaksiDatas} AppMockup={AppMockup} />


        const TabDatas = [
            {
                key: 1,
                isActive: this.state.isTransaksiActive,
                handleClick: this.handleClickTransaksi,
                text: 'TRANSAKSI QR',

                bodyComponents: transaksiComponents
            },
            {
                key: 2,
                isActive: this.state.isModalActive,
                handleClick: this.handleClickModal,
                text: 'ISI MODAL USAHA',
            },
            {
                key: 3,
                isActive: this.state.isTarikActive,
                handleClick: this.handleClickTarik,
                text: 'TARIK PENDAPATAN',
            },
            {
                key: 4,
                isActive: this.state.isLoketActive,
                handleClick: this.handleClickLoket,
                text: 'LOKET BAYAR',
            },
        ]

        return(
            <div>
                <Tab btnDatas={TabDatas}/>
            </div>
        )
    }
}

export default TabFeatured