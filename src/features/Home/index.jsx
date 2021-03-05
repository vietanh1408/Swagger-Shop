import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import productApi from '../../api/productApi'
import Banner from '../../components/Banner'
import { getProducts } from '../Products/productSlice'
import FlashDeal from './components/FlashDeal'
import HomeBanner from './components/HomeBanner'
import './styles.scss'

function Home() {


    const [productList, setProductList] = useState([])

    useEffect(() => {
        const fetchProductList = async () => {
            const response = await productApi.getAll()
            try {
                setProductList(response)
            } catch (error) {
                console.log('ERROR: ', error)
            }
        }
        fetchProductList()
    }, [])

    return (
        <section id="home-page">
            {/* banner */}
            <Banner />

            {/* home banner */}
            <HomeBanner />

            {/* flash deal */}
            <FlashDeal productList={productList} />

        </section>
    )
}

export default Home
