import React from 'react'

function ImgBanner({ src, alt }) {

    const imgStyles = {
        width: 100 + "%",
        height: "auto"
    }

    return (
        <>
            <img src={src} alt={alt} style={imgStyles} />
        </>
    )
}

export default ImgBanner
