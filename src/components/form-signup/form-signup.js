import React from 'react'
import './form-signup.scss'
import StepSignUp from '../step-signup/step-signup'
import FormSignUpComponents from '../form-signup-components/form-signup-components'

class FormSignup extends React.Component{
    constructor(){
        super()

        this.state = {
            FullName: '',
            NoHp: '',
            ReferralCode1: '',
            ReferralCode2: '',

            NamaToko: '',
            AlamatToko: '',
            KoordinatToko: '',
            KategoriToko: '',
            JamBuka: '',
            JamTutup: '',

            isAggree: '',

            step1: true,
            step2: false,
            step3: false,
            step4: false,

            isStep1Complete: false,
            isStep2Complete: false,
            isStep3Complete: false,
            isStep4Complete: false,
        }
    }

    handleClickLanjut(){
        this.setState({})
    }
    
    render(){
        return(
            <div>
                <StepSignUp />
                <FormSignUpComponents />
            </div>
        )
    }
}

export default FormSignup