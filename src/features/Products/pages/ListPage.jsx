import { Box, Grid, makeStyles, Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LeftFilter from '../components/LeftFilter';
import TopFilter from '../components/TopFilter';
import { getProducts } from '../productSlice';
import ProductList from './../components/ProductList';

const useStyles = makeStyles(theme => ({
    root: {},

    filter: {
        width: '350px'
    },

    productList: {
        flex: '1 1 0'
    },

    productEmpty: {
        marginTop: '2rem',
        '& p': {
            fontWeight: 'bold'
        }
    }
}))

const ListPage = () => {

    const classes = useStyles();
    const [sort, setSort] = useState(0)
    const dispatch = useDispatch()
    const productList = useSelector(state => state.product.list)
    const search = useSelector(state => state.product.searchKey)

    const handleInputSearchChange = (e) => {

    }

    const renderData = () => {
        dispatch(getProducts({ search, sort }));
    }

    const handleSortBy = (value) => {
        setSort(value)
    }

    useEffect(() => {
        renderData()
    }, [search, sort])

    useEffect(() => {
        if (!productList) {
            dispatch(getProducts({ search, sort }))
        }
    }, [productList])


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
                            <TopFilter productsLength={productList?.length} handleSortBy={handleSortBy} />
                        </Paper>
                        <ProductList data={productList} />
                    </Grid>
                </Grid>
            </div>
        </Box>
    );
};


ListPage.propTypes = {

};


export default ListPage;
