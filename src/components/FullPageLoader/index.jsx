import React from 'react'
import LoadingImage from './../../assets/images/loading.jpg'
import './styles.scss'

function FullPageLoader() {
    return (
        <div className="full-page-loader">
            <img src={LoadingImage} alt="loading" />
        </div>
    )
}

export default FullPageLoader
