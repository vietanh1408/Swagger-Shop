import { Box, Grid, makeStyles, Paper } from '@material-ui/core';
import { unwrapResult } from '@reduxjs/toolkit';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductListSkeleton from '../components/ProductListSkeleton';
import TopFilter from '../components/TopFilter';
import { getProducts, searchProduct } from '../productSlice';
import productApi from './../../../api/productApi';
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

    const classes = useStyles()

    const [productList, setProductList] = useState([])

    const [loading, setLoading] = useState(true)

    const [search, setSearch] = useState('')

    const [filterProducts, setFilterProducts] = useState([])

    const fetchProductsList = async () => {
        try {
            const response = await productApi.getAll()
            setProductList(response)
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }


    useEffect(() => {
        fetchProductsList()
    }, [])

    useEffect(() => {

        setFilterProducts(
            productList.filter(product => {
                return product.title.toLowerCase().includes(search.toLowerCase())
            })
        )

    }, [search, productList])


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
                            <input type="text" onChange={(e) => setSearch(e.target.value)} />
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
