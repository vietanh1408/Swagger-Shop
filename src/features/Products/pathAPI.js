import { createAsyncThunk } from '@reduxjs/toolkit';
import productApi from '../../api/productApi';

export const getProducts = createAsyncThunk(
    'products/getProducts',
    async (payload = null) => {
        try {
            const { search, sort } = payload
            let response = await productApi.getAll();
            if (search) {
                response = response?.filter(x => x.title.toLowerCase().includes(search.toLowerCase()));
            }
            if (sort === 1) {
                response = response.sort((a, b) => {
                    return a.title.localeCompare(b.title)
                })
            }
            else if (sort === 2) {
                response = response.sort((a, b) => {
                    return b.title.localeCompare(a.title)
                })
            }
            else if (sort === 3) {
                response = response.sort((a, b) => {
                    return a.price - b.price
                })
            }
            else if (sort === 4) {
                response = response.sort((a, b) => {
                    return b.price - a.price
                })
            }
            const likes = localStorage.getItem('likes');
            return response
        } catch (error) {
            console.log('ERROR: ', error)
        }
    }
)
export const getProductsSlider = createAsyncThunk(
    'products/getProductsSlider',
    async () => {
        try {
            let response = await productApi.getAll();
            return response
        } catch (error) {
            console.log('ERROR: ', error)
        }
    }
)

export const getSortProduct = createAsyncThunk(
    'products/getSortProduct',
    async () => {
        try {
            let response = await productApi.sort('desc')
            return response
        } catch (err) {
            console.log(err)
        }
    }
)
