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

            step: [
                {
                    id: 1,
                    isActive: true,
                    isStepComplete: false,
                },
                {
                    id: 2,
                    isActive: false,
                    isStepComplete: false,
                },
                {
                    id: 3,
                    isActive: false,
                    isStepComplete: false,
                },
                {
                    id: 4,
                    isActive: false,
                    isStepComplete: false,
                },
            ],
        }

        this.handleClickLanjut = this.handleClickLanjut.bind(this)
        this.handleClickKembali = this.handleClickKembali.bind(this)
    }

    handleClickLanjut(id){
        console.log('clicked')
        this.setState(prevState => {
            const updatedData = prevState.step.map(
                step => {
                    if(step.id < id){
                        return{
                            ...step,
                            isActive: false,
                            isStepComplete: true
                        }
                    }else if(step.id === id){
                        return{
                            ...step,
                            isActive: true,
                        }
                    }else{
                        return step
                    }
                }
            )
            return{
                step: updatedData
            }
        })
    }

    handleClickKembali(id){
        console.log('back clicked')
        this.setState(prevState => {
            const updatedData = prevState.step.map(
                step => {
                    if(step.id > id){
                        return{
                            ...step,
                            isActive: false,
                            isStepComplete: false,
                        }
                    }else if(step.id === id){
                        return{
                            ...step,
                            isActive: true,
                            isStepComplete: false,
                        }
                    }else{
                        return step
                    }
                }
            )
            return{
                step: updatedData
            }
        })
    }
    
    render(){
        console.log(this.state.step)
        return(
            <div className="signup-container">
                <StepSignUp step={this.state.step}/>
                <FormSignUpComponents {...this.state} handleClickKembali={this.handleClickKembali} handleClickLanjut={this.handleClickLanjut}/>
            </div>
        )
    }
}

export default FormSignup