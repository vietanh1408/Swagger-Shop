import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import ProductList from './../components/ProductList'
import TopFilter from '../components/TopFilter';
import productApi from './../../../api/productApi'
import ProductListSkeleton from '../components/ProductListSkeleton';


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

    useEffect(() => {
        (async () => {
            try {
                const response = await productApi.getAll()

                setProductList(response)
            } catch (error) {
                console.log(error)
            }

            setLoading(false)
        })()
    }, [])


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
                        <Paper elevation={3}>Filter</Paper>
                    </Grid>
                    <Grid item className={classes.productList}>
                        <Paper elevation={3}>
                            <TopFilter />
                        </Paper>

                        {loading
                            ? <ProductListSkeleton />
                            : <ProductList data={productList} />
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
