import React from 'react'
import './form-signup-components.scss'
// import OtpInput from "react-otp-input";
// import OTPInput from 'otp-input-react'



import rightArrow from '../../assets/right-arrow-white.png'
import OTPInput from './otpinput';

function Step1Components(props){
    return(
        <React.Fragment>
        <form>
            <div className="form-group">
                <input type="text" placeholder="Nama Lengkap (Sesuai KTP)" />
            </div>

            <div className="form-group">
                <input type="text" placeholder="Nomor Handphone" />
            </div>

            <div className="form-group">
                <input type="text" placeholder="Kode Referral (Tidak Wajib)" />
            </div>

            <div className="form-group">
                <input type="text" placeholder="Kode Referral (Tidak Wajib)" />
            </div>

            <div className="form-group">
                <button className="button btn-primary arrow">Lanjut<img alt="" src={rightArrow}/></button>
            </div>
        </form>
        </React.Fragment>
    )
}

class Step2Components extends React.Component{
    // constructor(){
    //     super()
        
    //     this.state = {
    //         otp: '',
    //     }

    //     // this.handleChange = this.handleChange.bind(this)
    // }

    // handleChange = otp => this.setState({ otp })

    render(){


        return(
            <React.Fragment>
                <p className="body1">Masukkan 6 digit kode OTP yang telah terkirim melalui SMS ke nomor handphone yang Anda daftarkan</p>
    
    
                {/* <form className="form-otp">
                    <div className="input-otp">
                        <input type="text" className="otp" />
                    </div>
                    <div className="input-otp">
                        <input type="text" className="otp" />
                    </div>
                    <div className="input-otp">
                        <input type="text" className="otp" />
                    </div>
                </form> */}
    
                {/* <OtpInput
                    onChange={this.handleChange}
                    numInputs={6}
                    separator={<div></div>}
                    // inputStyle={
    
                    // }
                /> */}

                <OTPInput />
    
            </React.Fragment>
        )
    }
}

class FormSignUpComponents extends React.Component{
    render(){
        return(
            <div>
                <Step1Components />
                <Step2Components />
            </div>
        )
    }
}

export default FormSignUpComponents