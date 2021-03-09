import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { FormControl, InputLabel, makeStyles, MenuItem, Select } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '1rem 1.5rem',
        display: 'flex',
        justifyContent: 'space-between'
    },

    heading: {
        marginBottom: '0 !important',
        display: 'flex',
        alignItems: 'center'
    },

    sortBy: {
        display: 'flex',
        alignItems: 'center',
    },

    select: {
        width: '200px',
        height: '30px',
        marginLeft: '20px'
    },

    selectOption: {
        marginBottom: '1rem'
    }
}))


const TopFilter = () => {

    const products = useSelector(state => state.product.list)

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <p className={classes.heading}>{`There Are ${products.length} Products`}</p>
            <div className={classes.sortBy}>
                <p>Sort By:</p>
                <select className={classes.select}>
                    <option className={classes.selectOption}>Relevance</option>
                    <option className={classes.selectOption}>Name,A to Z</option>
                    <option className={classes.selectOption}>Name, Z to A</option>
                    <option className={classes.selectOption}>Price, low to high</option>
                    <option className={classes.selectOption}>Price, high to low</option>
                </select>
            </div>
        </div>
    );
};


TopFilter.propTypes = {

};


export default TopFilter;
