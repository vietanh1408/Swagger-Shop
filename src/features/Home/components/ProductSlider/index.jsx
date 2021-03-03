import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import Product from '../../../Products/components/Product'
import productApi from './../../../../api/productApi'
import './styles.scss'



function ProductSlider({ productList }) {


    const NextArrow = ({ onClick }) => {
        return (
            <div className="arrow arrow-next" onClick={onClick}>
                <i className="fas fa-chevron-circle-right"></i>
            </div>
        )
    }

    const PrevArrow = ({ onClick }) => {
        return (
            <div className="arrow arrow-prev" onClick={onClick}>
                <i className="fas fa-chevron-circle-left"></i>
            </div>
        )
    }

    const [productIndex, setProductIndex] = useState(0)

    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 500,
        slidersToShow: 1,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setProductIndex(next)
    }


    return (
        <div className="product-carousel">
            <Slider {...settings}>
                {productList.map((product, index) => (
                    <div key={index} className={index === productIndex ? 'slide activeSlide' : 'slide'}>
                        <Product product={product} />
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default ProductSlider
