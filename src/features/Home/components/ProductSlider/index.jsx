import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Slider from 'react-slick'
import Product from '../../../Products/components/Product'
import './styles.scss'



function ProductSlider() {

    const productList = useSelector(state => state.product.list)


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
        slidersToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setProductIndex(next)
    }


    return (
        <div className="product-carousel">
            <Slider {...settings}>
                {productList?.map((product, index) => (
                    <div key={index} className={index === productIndex ? 'slide activeSlide' : 'slide'}>
                        <Product product={product} />
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default ProductSlider
