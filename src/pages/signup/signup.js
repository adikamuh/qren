import React from 'react'
import './signup.scss'
import FormSignup from '../../components/form-signup/form-signup'

class SignUp extends React.Component{
    render(){
        return(
            <div>
                <div className="header-signup">
                    <div className="header-line"></div>
                    <div className="header-box"><h2 className="text-bold">Bisnis Makin Untung Dimuali Dari Sini!</h2></div>
                    <div className="header-line"></div>
                </div>
                <FormSignup />
            </div>
        )
    }
}

export default SignUp