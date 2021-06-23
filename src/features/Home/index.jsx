import React from 'react'
import Banner from '../../components/Banner'
import Categories from './components/Categories'
import FlashDeal from './components/FlashDeal'
import HomeBanner from './components/HomeBanner'
function Home() {

    return (
        <section id="home-page">
            {/* banner */}
            <Banner />

            {/* home banner */}
            <HomeBanner />

            {/* flash deal */}
            <FlashDeal />

            {/* categories */}
            <Categories />

        </section>
    )
}

export default Home
