import React from 'react'
import './home.scss'
import Description from '../../components/description/description'
import Benefit from '../../components/benefit/benefit'

class Home extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Description />
                <Benefit />
            </React.Fragment>
        )
    }
}

export default Home