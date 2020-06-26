import React from 'react'
import './tab-content.scss'

import appMockup1 from '../../assets/featured/11.png'
import appMockup2 from '../../assets/featured/12.png'
import appMockup3 from '../../assets/featured/13.png'
import appMockup4 from '../../assets/featured/14.png'
import appMockup5 from '../../assets/featured/15.png'
import appMockup6 from '../../assets/featured/16.png'

function StepItem(props){
    return(
        <div className={props.isActive === props.id ? 'step-item active' : 'step-item'}>
            <button className="number" onClick={() => props.onClick(props.id)}>
                <h5 className="text-bold">{props.id}</h5>
            </button>
            <p className="body1">{props.text}</p>
        </div>
    )
}

function StepLists(props){
    let i = 1

    const StepItemComponents = props.StepDatas.map(
        step => <StepItem key={step.key} {...step} id={i++} />
    )

    console.log(props.StepDatas)

    return(
        <React.Fragment>
        <div className="mockup" style={{backgroundImage: 'url('+props.appMockup[props.isActive-1]+')'}}></div>
        <div className="step-list">
            {StepItemComponents}
        </div>
        </React.Fragment>
    )
}

class TabContent extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            activeStep: 1,
        }

        this.handleClickStep = this.handleClickStep.bind(this)
    }

    handleClickStep(id){
        this.setState({activeStep: id})
    }

    render(){
        let AppMockup = [
            appMockup1,appMockup2,appMockup3,appMockup4,appMockup5,appMockup6
        ]

        const StepDatas = [
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

        console.log(this.props.StepDatas)


        return(
            <div className="container">
                <div className="content-wrapper">
                    <StepLists StepDatas = {StepDatas} appMockup={AppMockup} isActive={this.state.activeStep}/>
                </div>
            </div>
        )
    }
}

export default TabContent