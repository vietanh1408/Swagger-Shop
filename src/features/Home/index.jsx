import React from 'react'
import Banner from '../../components/Banner'
import FlashDeal from './components/FlashDeal'
import HomeBanner from './components/HomeBanner'
import './styles.scss'

function Home() {

    return (
        <section id="home-page">
            {/* banner */}
            <Banner />

            {/* home banner */}
            <HomeBanner />

            {/* flash deal */}
            <FlashDeal />

        </section>
    )
}

export default Home
