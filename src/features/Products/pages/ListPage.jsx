import { Box, Grid, makeStyles, Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import LeftFilter from '../components/LeftFilter';
import ProductListSkeleton from '../components/ProductListSkeleton';
import TopFilter from '../components/TopFilter';
import ProductList from './../components/ProductList';


const useStyles = makeStyles(theme => ({
    root: {},

    filter: {
        width: '350px'
    },

    productList: {
        flex: '1 1 0'
    }
}))

const ListPage = () => {

    const [loading, setLoading] = useState(true)

    const classes = useStyles()

    const [search, setSearch] = useState('')

    const [filterProducts, setFilterProducts] = useState([])

    const products = useSelector(state => state.product.list)

    const [productList, setProductList] = useState(products)

    const searchKey = useSelector(state => state.product.searchKey)

    const handleInputSearchChange = (e) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    useEffect(() => {
        setFilterProducts(
            productList.filter(product => {
                return product.title.toLowerCase().includes(search.toLowerCase())
            })
        )
    }, [search, productList])

    useEffect(() => {
        setSearch(searchKey)
    }, [searchKey])

    return (
        <Box>
            {/* banner */}
            <Box>
                <img
                    src="http://demo.posthemes.com/pos_ecolife_decoration/decoration3/themes/theme_ecolife_decoration3/assets/img/bg_breadcrumb.jpg"
                    alt="banner"
                    width="100%"
                />
            </Box>

            <div className="container pt-5">
                <Grid container spacing={3}>
                    <Grid item className={classes.filter}>
                        <Paper elevation={3}>
                            <LeftFilter onChange={handleInputSearchChange} />
                        </Paper>
                    </Grid>
                    <Grid item className={classes.productList}>
                        <Paper elevation={3}>
                            <TopFilter />
                        </Paper>

                        {loading
                            ? <ProductListSkeleton />
                            : <ProductList data={filterProducts} />
                        }
                    </Grid>
                </Grid>
            </div>
        </Box>
    );
};


ListPage.propTypes = {

};


export default ListPage;
