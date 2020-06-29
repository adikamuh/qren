import React from 'react'
import './form-signup-components.scss'
import { Link } from 'react-router-dom'
import OtpInput from "react-otp-input";
// import OTPInput from 'otp-input-react'



import rightArrow from '../../assets/right-arrow-white.png'
import leftArrow from '../../assets/left-arrow-red.png'
import eye from '../../assets/Inactive.png'
import dropdown from '../../assets/dropdown.png'
import information from '../../assets/information.png'
// import OTPInputForm from './otpinput.tsx'

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

function Step2Components(props){
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
                separator={<span>-</span>}
            />

            <p className="body2">OTP berlaku hingga 0:{counter}</p>
            <a
                className="button text-bold"
                onClick={() => setCounter(60)}
            >Kirim Ulang</a>

            <div className="form-group" style={{marginTop: '4rem'}}>
                <button className="button btn-pasive"><img src={leftArrow} alt=""/>Kembali</button>
                <button className="button btn-primary arrow">Lanjut<img src={rightArrow} alt=""></img></button>
            </div>
        </div>
    )
}

function Step3Components(props){
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
            <form>
                <div className="form-group">
                    <input 
                        placeholder="PIN"
                        type={paswordShown ? "text" : "password"}
                    />
                    <img src={eye} className="eye" alt="" onClick={togglePassword} />
                </div>
                <div className="form-group">
                    <input 
                        placeholder="Konfirmasi PIN"
                        type={paswordShownConfirm ? "text" : "password"}
                    />
                    <img src={eye} className="eye" alt="" onClick={togglePasswordConfirm} />
                </div>
                <div className="form-group">
                    <button className="button btn-pasive"><img src={leftArrow} alt=""/>Kembali</button>
                    <button className="button btn-primary arrow">Lanjut<img src={rightArrow} alt=""></img></button>
                </div>
            </form>
        </div>
    )
}

function Step4Components(props){
    return(
        <div className="step4">
            <p className="body1">Silakan pilih jenis usaha Anda</p>

            <Link className="link-box">
                <i className="button text-uppercase">usaha perseorangan</i>
                <img src={dropdown} alt=""></img>
            </Link>
            <Link className="link-box">
                <i className="button text-uppercase">usaha berbadan hukum</i>
                <img src={dropdown} alt=""></img>
            </Link>
        </div>
    )
}

function Step4ComponentsPerseorangan(props){
    return(
        <div className="step4-perseorangan">
            <p className="body1">Dengan melengkapi isian dibawah ini,<br/>toko Anda akan mendapatkan kesempatan promosi di aplikasi t-money!</p>

            <form>
                <div className="form-group">
                    <input type="text" placeholder="Nama Toko" />
                </div>

                <div className="form-group">
                    <input type="text" placeholder="Alamat Toko" />
                </div>

                <div className="form-group">
                    <input type="text" placeholder="Koordinat Toko" />
                </div>

                <div className="form-group">
                    <select placeholder="Kategori Toko">
                        <option></option>
                        <option>1</option>
                        <option>1</option>
                        <option>1</option>
                    </select>
                </div>

                <div className="form-group">
                    <input type="text" placeholder="No. Handphone (untuk login)" />
                </div>

                <div className="check-form">
                    <input type="checkbox" className="styled-checkbox"></input>
                    {/* <label></label> */}
                    <label className="body1">Dengan mengklik <span className="text-bold">Daftar</span> saya setuju dengan <Link to="">Syarat & Ketentuan</Link> yang berlaku.</label>
                </div>

                <div className="form-group">
                    <button className="button btn-pasive" style={{marginRight: '1rem'}}><img src={leftArrow} alt=""/>Kembali</button>
                    <button className="button btn-primary arrow">Daftar<img src={rightArrow} alt=""></img></button>
                </div>
            </form>
        </div>
    )
}

function Step4ComponentsHukum(props){
    return(
        <div className="step4-perseorangan">
            <p className="body1">Silahkan pilih jenis usaha Anda</p>

            <form>
                <div className="form-group">
                    <input type="text" placeholder="Nama Toko" />
                </div>

                <div className="form-group">
                    <input type="text" placeholder="Alamat Toko" />
                </div>

                <div className="form-group">
                    <input type="text" placeholder="Koordinat Toko" />
                </div>

                <div className="form-group">
                    <select placeholder="Kategori Toko">
                        <option></option>
                        <option>1</option>
                        <option>1</option>
                        <option>1</option>
                    </select>
                </div>

                <div className="form-group">
                    <input type="text" placeholder="No. Handphone (untuk login)" />
                </div>

                <div className="check-form">
                    <input type="checkbox" className="styled-checkbox"></input>
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
                    <button className="button btn-pasive" style={{marginRight: '1rem'}}><img src={leftArrow} alt=""/>Kembali</button>
                    <button className="button btn-primary arrow">Daftar<img src={rightArrow} alt=""></img></button>
                </div>
            </form>
        </div>
    )
}

class FormSignUpComponents extends React.Component{
    render(){
        return(
            <div>
                <Step1Components />
                <Step2Components />
                <Step3Components />
                <Step4Components />
                <Step4ComponentsPerseorangan />
                <Step4ComponentsHukum />
            </div>
        )
    }
}

export default FormSignUpComponents