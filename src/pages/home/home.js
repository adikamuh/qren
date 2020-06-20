import React from 'react'
import './home.scss'
import Description from '../../components/description/description'
import Benefit from '../../components/benefit/benefit'
import Featured from '../../components/featured/featured'
import Partner from '../../components/partner/partner'
import CoverComponent from '../../components/cover-component/cover-component'

class Home extends React.Component{
    render(){
        return(
            <div>
                <CoverComponent />
                <Description />
                <Benefit />
                <Featured />
                <Partner />
            </div>
        )
    }
}

export default Home