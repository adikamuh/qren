import React from 'react'
import './tab-featured.scss'
import Tab from '../tab/tab'
import TabContentModal from './tab-content-modal'
import TabContent from './tab-content'

import {
    StepTransaksiDatas,AppMockupTransaksi,
    StepPendapatanDatas,AppMockupPendapatan,
    StepLoketDatas,AppMockupLoket, AppMockupModal1, StepModalDatas1
} from '../../data/featured-data'

class TabFeatured extends React.Component{
    constructor(){
        super()

        this.state = {
            AppMockupTransaksi: AppMockupTransaksi,StepTransaksiDatas: StepTransaksiDatas,
            AppMockupModal1: AppMockupModal1, StepModalDatas1: StepModalDatas1,
            AppMockupPendapatan: AppMockupPendapatan,StepPendapatanDatas: StepPendapatanDatas,
            AppMockupLoket: AppMockupLoket,StepLoketDatas: StepLoketDatas,


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
            activeStep: 1,
        })
    }

    handleClickModal(){
        this.setState({
            isTransaksiActive: false,
            isModalActive: true,
            isTarikActive: false,
            isLoketActive: false,
            activeStep: 1,
        })
    }

    handleClickTarik(){
        this.setState({
            isTransaksiActive: false,
            isModalActive: false,
            isTarikActive: true,
            isLoketActive: false,
            activeStep: 1,
        })
    }

    handleClickLoket(){
        this.setState({
            isTransaksiActive: false,
            isModalActive: false,
            isTarikActive: false,
            isLoketActive: true,
            activeStep: 1,
        })
    }

    
    render(){
        // console.log(this.state)

        const transaksiComponents = <TabContent 
                StepDatas={this.state.StepTransaksiDatas} 
                AppMockup={this.state.AppMockupTransaksi[this.state.activeStep-1]} 
                activeStep={this.state.activeStep}
                onClick={this.handleClickStep}
            />

        const pendapatanComponents = <TabContent
                StepDatas={this.state.StepPendapatanDatas} 
                AppMockup={this.state.AppMockupPendapatan[this.state.activeStep-1]} 
                activeStep={this.state.activeStep}
                onClick={this.handleClickStep}
            />

        const loketComponents = <TabContent
                StepDatas={this.state.StepLoketDatas} 
                AppMockup={this.state.AppMockupLoket[this.state.activeStep-1]} 
                activeStep={this.state.activeStep}
                onClick={this.handleClickStep}
            />

        const modalComponents = <TabContentModal
                StepDatas={this.state.StepModalDatas1} 
                AppMockup={this.state.AppMockupModal1[this.state.activeStep-1]} 
                activeStep={this.state.activeStep}
                onClick={this.handleClickStep}
            />

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

                bodyComponents: modalComponents
            },
            {
                key: 3,
                isActive: this.state.isTarikActive,
                handleClick: this.handleClickTarik,
                text: 'TARIK PENDAPATAN',

                bodyComponents: pendapatanComponents
            },
            {
                key: 4,
                isActive: this.state.isLoketActive,
                handleClick: this.handleClickLoket,
                text: 'LOKET BAYAR',

                bodyComponents: loketComponents
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