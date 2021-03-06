import React from 'react'
import LoadingImage from './../../assets/images/loading.jpg'
import './styles.scss'

function FullPageLoader() {
    return (
        <div className="full-page-loader">
            <div className="sk-chase">
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
            </div>
        </div>
    )
}

export default FullPageLoader
