import React from 'react'
import './product.scss'
import BannerLong from '../../components/banner/banner-long'
import TabProduct from '../../components/tab-product/tab-product'

class Product extends React.Component{
    render(){
        return(
            <div className='top'>
                <div className="container">
                    <h1 className="text-bold top-title">QRen hadir untuk memudahkan proses pembayaran, serta meningkatkan potensi bisnis Anda.</h1>
                </div>
                <BannerLong />
                <TabProduct />
            </div>
        )
    }
}

export default Product