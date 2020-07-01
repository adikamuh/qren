import React, { useState } from 'react'
import Select from 'react-select'
import './form-signup-components.scss'
import { Link } from 'react-router-dom'
import OtpInput from "react-otp-input";
import LabelInput from "label-inside-input-react";

// import OTPInput from 'otp-input-react'


import dropdownDown from '../../assets/dropdown-down.png'
import rightArrow from '../../assets/right-arrow-white.png'
import leftArrow from '../../assets/left-arrow-red.png'
import eye from '../../assets/Inactive.png'
import dropdown from '../../assets/dropdown.png'
import information from '../../assets/information.png'
// import OTPInputForm from './otpinput.tsx'

function Step1Components(props){
    console.log(props)

    const options = [
        { value:"", label:"Kategori Toko" },
        { value:"perseorangan", label:"Perseorangan" },
        { value:"hukum", label:"Berbadan Hukum" },
    ]
    return(
        <React.Fragment>
        <form onSubmit={(event) => event.preventDefault()}>
            <div className="form-group">
                <LabelInput type="text" placeholder="Nama Lengkap (Sesuai KTP)" className="__inputText"/>
                {/* <input type="text" placeholder="Nama Lengkap (Sesuai KTP)" /> */}
            </div>

            {/* <div className="form-group">
                <Select options={options} width="1000px"/>
            </div> */}

            {/* <div className="form-group">
                <select className="input-dropdown">
                    <option value="">Kategori Toko</option>
                    <option value="perseorangan">Perseorangan</option>
                    <option value="hukum">Berbadan Hukum</option>
                </select>
                <span className="__dropdown_label">Kategori Toko</span>
                <img src={dropdownDown} alt="" className="__dropdown" />
            </div> */}

            <div className="form-group">
                <LabelInput type="text" placeholder="Nomor Handphone" className="__inputText"/>
                {/* <input type="text" placeholder="Nomor Handphone" /> */}
            </div>

            <div className="form-group">
                <LabelInput type="text" placeholder="Kode Referral (Tidak Wajib)" className="__inputText"/>
                {/* <input type="text" placeholder="Kode Referral (Tidak Wajib)" /> */}
            </div>

            <div className="form-group">
                <LabelInput type="text" placeholder="Kode Referral (Tidak Wajib)" className="__inputText"/>
                {/* <input type="text" placeholder="Kode Referral (Tidak Wajib)" /> */}
            </div>

            <div className="form-group">
                <button className="button btn-primary arrow" onClick={() => props.handleClickLanjut(2)}>Lanjut<img alt="" src={rightArrow}/></button>
            </div>
        </form>
        </React.Fragment>
    )
}

function Step2Components(props){
    // console.log(props)
    const [counter, setCounter] = React.useState(60);

    // Second Attempts
    React.useEffect(() => {
        const timer =
          counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);

    return(
        <div className="step2">
            <p className="body1">Masukkan 6 digit kode OTP yang telah terkirim melalui SMS ke nomor handphone yang Anda daftarkan</p>

            {/* <OTPInputForm /> */}

            <OtpInput
                onChange={otp => console.log(otp)}
                numInputs={6}
                inputStyle={"otpInput"}
            />

            <p className="body2">OTP berlaku hingga 0:{counter}</p>
            <button  
                className="button text-bold onlink"
                onClick={() => setCounter(60)}
            >Kirim Ulang</button>

            <div className="form-group" style={{marginTop: '4rem'}}>
                <button className="button btn-pasive" onClick={() => props.handleClickKembali(1)} ><img src={leftArrow} alt=""/>Kembali</button>
                <button className="button btn-primary arrow"  onClick={() => props.handleClickLanjut(3)}>Lanjut<img src={rightArrow} alt=""></img></button>
            </div>
        </div>
    )
}

function Step3Components(props){
    console.log(props)
    const [paswordShown, setPaswordShown] = React.useState(false);
    const [paswordShownConfirm, setPaswordShownConfirm] = React.useState(false);

    const togglePassword = () => {
        setPaswordShown(paswordShown ? false:true)
    }

    const togglePasswordConfirm = () => {
        setPaswordShownConfirm(paswordShownConfirm ? false:true)
    }

    return(
        <div className="step3">
            <p className="body1">Buat PIN baru untuk dapat masuk ke QRen menggunakan 6 angka</p>
            <form onSubmit={(event) => event.preventDefault()}>
                <div className="form-group">
                    {/* <input 
                        placeholder="PIN"
                        type={paswordShown ? "text" : "password"}
                    /> */}
                    <LabelInput type={paswordShown ? "text" : "password"} placeholder="PIN" className="__inputText"/>
                    <img src={eye} className="eye" alt="" onClick={togglePassword} />
                </div>
                <div className="form-group">
                    {/* <input 
                        placeholder="Konfirmasi PIN"
                        type={paswordShownConfirm ? "text" : "password"}
                    /> */}
                    <LabelInput type={paswordShownConfirm ? "text" : "password"} placeholder="Konfirmasi PIN" className="__inputText"/>
                    <img src={eye} className="eye" alt="" onClick={togglePasswordConfirm} />
                </div>
            </form>
            <div className="form-group">
                <button className="button btn-pasive"  onClick={() => props.handleClickKembali(2)}><img src={leftArrow} alt=""/>Kembali</button>
                <button className="button btn-primary arrow" onClick={() => props.handleClickLanjut(4)}>Lanjut<img src={rightArrow} alt=""></img></button>
            </div>
        </div>
    )
}

function Step4Components(props){
    const [isPerseorangan, setIsPerseorangan] = useState(false);
    const [isHukum, setIsHukum] = useState(false);

    

    console.log(props)
    return(
        <React.Fragment>
        <div className="step4" style={{display: isPerseorangan || isHukum ? 'none' : 'flex'}} >
            <p className="body1">Silakan pilih jenis usaha Anda</p>

            <Link className="link-box" onClick={() => setIsPerseorangan(true)}>
                <i className="button text-uppercase">usaha perseorangan</i>
                <img src={dropdown} alt=""></img>
            </Link>
            <Link className="link-box" onClick={() => setIsHukum(true)}>
                <i className="button text-uppercase">usaha berbadan hukum</i>
                <img src={dropdown} alt=""></img>
            </Link>
            <div className="form-group">
                <button className="button btn-pasive"  onClick={() => props.handleClickKembali(3)}><img src={leftArrow} alt=""/>Kembali</button>
            </div>
        </div>

        {isPerseorangan && <Step4ComponentsPerseorangan setIsPerseorangan={setIsPerseorangan} />}
        {isHukum && <Step4ComponentsHukum setIsHukum={setIsHukum} />}

        </React.Fragment>
    )
}

function Step4ComponentsPerseorangan(props){
    const [isAgree, setIsAgree] = useState(false);
    

    return(
        <div className="step4-perseorangan">
            <p className="body1" style={{textAlign: 'center'}}>Dengan melengkapi isian dibawah ini,<br/>toko Anda akan mendapatkan kesempatan promosi di aplikasi t-money!</p>

            <form onSubmit={(event) => event.preventDefault()}>
                <div className="form-group">
                    <LabelInput type="text" placeholder="Nama Toko" className="__inputText"/>
                    {/* <input type="text" placeholder="Nama Toko" /> */}
                </div>

                <div className="form-group">
                    <LabelInput type="text" placeholder="Alamat Toko" className="__inputText"/>
                    {/* <input type="text" placeholder="Alamat Toko" /> */}
                </div>

                <div className="form-group">
                    <LabelInput type="text" placeholder="Koordinat Toko" className="__inputText"/>
                    {/* <input type="text" placeholder="Koordinat Toko" /> */}
                    <button className="button btn-primary __map">BUKA MAP</button>
                </div>

                <div className="form-group">
                    <select className="input-dropdown">
                        <option value="">Kategori Toko</option>
                        <option value="perseorangan">Perseorangan</option>
                        <option value="hukum">Berbadan Hukum</option>
                    </select>
                    <span className="__dropdown_label">Kategori Toko</span>
                    <img src={dropdownDown} alt="" className="__dropdown" />
                </div>

                <div className="form-group">
                    <LabelInput type="text" placeholder="No. Handphone (untuk login)" className="__inputText"/>
                    {/* <input type="text" placeholder="No. Handphone (untuk login)" /> */}
                </div>

                <div className="check-form">
                    <input type="checkbox" className="styled-checkbox" onClick={() => setIsAgree(!isAgree)}></input>
                    {/* <label></label> */}
                    <label className="body1">Dengan mengklik <span className="text-bold">Daftar</span> saya setuju dengan <Link to="">Syarat & Ketentuan</Link> yang berlaku.</label>
                </div>

                <div className="form-group">
                    <button className="button btn-pasive" onClick={() => props.setIsPerseorangan(false)} style={{marginRight: '1rem'}}><img src={leftArrow} alt=""/>Kembali</button>
                    <Link to="/signup-complete"><button className="button btn-primary arrow" disabled={!isAgree}>Daftar<img src={rightArrow} alt=""></img></button></Link>
                </div>
            </form>
        </div>
    )
}

function Step4ComponentsHukum(props){
    const [isAgree, setIsAgree] = useState(false);
    return(
        <div className="step4-perseorangan">
            <p className="body1" style={{textAlign: 'center'}}>Dengan melengkapi isian dibawah ini,<br/>toko Anda akan mendapatkan kesempatan promosi di aplikasi t-money!</p>

            <form onSubmit={(event) => event.preventDefault()}>
                <div className="form-group">
                    <LabelInput type="text" placeholder="Nama Toko" className="__inputText"/>
                    {/* <input type="text" placeholder="Nama Toko" /> */}
                </div>

                <div className="form-group">
                    <LabelInput type="text" placeholder="Alamat Toko" className="__inputText"/>
                    {/* <input type="text" placeholder="Alamat Toko" /> */}
                </div>

                <div className="form-group">
                    <LabelInput type="text" placeholder="Koordinat Toko" className="__inputText"/>
                    {/* <input type="text" placeholder="Koordinat Toko" /> */}
                    <button className="button btn-primary __map" >BUKA MAP</button>
                </div>

                <div className="form-group">
                    <select className="input-dropdown">
                        <option value="">Kategori Toko</option>
                        <option value="perseorangan">Perseorangan</option>
                        <option value="hukum">Berbadan Hukum</option>
                    </select>
                    <span className="__dropdown_label">Kategori Toko</span>
                    <img src={dropdownDown} alt="" className="__dropdown" />
                </div>

                <div className="form-group">
                    <LabelInput type="text" placeholder="No. Handphone (untuk login)" className="__inputText"/>
                    {/* <input type="text" placeholder="No. Handphone (untuk login)" /> */}
                </div>

                <div className="check-form">
                    <input type="checkbox" className="styled-checkbox" onClick={() => setIsAgree(!isAgree)}></input>
                    {/* <label></label> */}
                    <label className="body1">Dengan mengklik <span className="text-bold">Daftar</span> saya setuju dengan <Link to="">Syarat & Ketentuan</Link> yang berlaku.</label>
                </div>

                <div className="information">
                    <img src={information} alt="" />
                    <div className="information-content">
                        <p className="body1">Untuk Pendaftaran Usaha Beradan Hukum mohon mempersiapkan:</p>
                        <ul>
                            <li>Fotokopi KTP/SIM Pemilik Usaha</li>
                            <li>Fotokopi SIUP/TDP</li>
                            <li>Fotokopi Akte Perusahaan</li>
                            <li>Surat Kuasa Asli (Bila diwakilkan)</li>
                        </ul>
                        <p className="text-bold body1" style={{fontWeight: 'bold'}}>Dokumen ini sebagai persyaratan untuk proses Verifikasi Data yang harus anda lengkapi saat menghubungi Heldesk QRen.</p>
                    </div>
                </div>

                <div className="form-group">
                    <button className="button btn-pasive" onClick={() => props.setIsHukum(false)} style={{marginRight: '1rem'}}><img src={leftArrow} alt=""/>Kembali</button>
                    <Link to="/signup-complete"><button className="button btn-primary arrow" disabled={!isAgree}>Daftar<img src={rightArrow} alt=""></img></button></Link>
                </div>
            </form>
        </div>
    )
}

class FormSignUpComponents extends React.Component{
    render(){
        console.log(this.props.step[0].isActive)
        return(
            <div>
                {this.props.step[0].isActive && <Step1Components {...this.props}/>}
                {this.props.step[1].isActive && <Step2Components {...this.props}/>}
                {this.props.step[2].isActive && <Step3Components {...this.props}/>}
                {this.props.step[3].isActive && <Step4Components {...this.props}/>}
            </div>
        )
    }
}

export default FormSignUpComponents