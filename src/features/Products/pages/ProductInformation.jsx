import { Box, Button, makeStyles } from '@material-ui/core'
import CreateIcon from '@material-ui/icons/Create'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import ShareIcon from '@material-ui/icons/Share'
import TextsmsIcon from '@material-ui/icons/Textsms'
import { Rating } from '@material-ui/lab'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import useFullPageLoader from '../../../hooks/useFullPageLoader'
import { addToWishlist } from '../../WishList/wishlistSlice'
import productApi from './../../../api/productApi'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

const useStyles = makeStyles(theme => ({
    root: {
        boxSizing: 'border-box',
        marginTop: '2rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridGap: '1rem',
        gridAutoRows: 'minmax(100px, 300px)',
        gridTemplateAreas: ' "image content" "image price" "zoom price"'
    },

    image: {
        gridArea: 'image',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        padding: '2rem',

        '& img': {
            width: '70%',
            objectFit: 'contain'
        }
    },

    banner: {
        position: 'relative',
        width: '100%',
        height: '300px',
        backgroundImage: `url('http://demo.posthemes.com/pos_ecolife_decoration/decoration3/themes/theme_ecolife_decoration3/assets/img/bg_breadcrumb.jpg')`,
        backgroundSize: 'contain',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'

    },

    content: {
        gridArea: 'content'
    },

    action: {
        gridArea: 'price',
        padding: '2rem 0'
    },

    zoom: {
        gridArea: 'zoom',
    },

    price: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
    },

    addToCart: {
        backgroundColor: '#b79b6c',
        color: '#fff',
        marginTop: '5rem',
        width: '20rem',
    }


}))

function ProductInformation() {

    const { productId } = useParams()

    const [product, setProduct] = useState()

    const [loader, showLoader, hideLoader] = useFullPageLoader()

    const [value, setValue] = useState(4);

    const classes = useStyles()

    const dispatch = useDispatch()

    useEffect(() => {

        (async () => {
            showLoader()
            try {
                const data = await productApi.get(productId)
                setProduct(data)
                console.log(data)
                hideLoader()
            } catch (err) {
                console.log(err)
            }
        })()
    }, [])

    const handleAddToWishlist = (product) => {
        dispatch(addToWishlist(product))
    }


    return (
        <>
            <Box className={classes.banner}>
                <p>
                    <Link to="/">Home</Link>
                    <i className="fas fa-chevron-right" style={{ margin: "0 0.5rem", fontSize: '0.7rem' }}></i>
                    <span>{product?.category}</span>
                    <i className="fas fa-chevron-right" style={{ margin: "0 0.5rem", fontSize: '0.7rem' }}></i>
                    <span style={{ color: '#b79b6c' }}>{product?.title}</span>
                </p>
            </Box>
            <div className="container">
                <div className={classes.root}>
                    <div className={classes.image}>
                        <img src={product?.image} alt={product?.title} />
                    </div>
                    <div className={classes.content}>
                        <h2>{product?.title}</h2>
                        <p><span>Reference:</span> demo_24</p>
                        <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        />
                        <div className="d-flex">
                            <p className="mr-3">
                                <TextsmsIcon />
                            Read reviews (<span>1</span>)
                            </p>
                            <CreateIcon />
                            <span>Write a review</span>
                        </div>
                        <br />
                        <span className={classes.price}>${product?.price}</span>
                        <h5 className="mt-3">Description:</h5>
                        <p>{product?.description}</p>
                    </div>
                    <div className={classes.action}>

                        <Button
                            onClick={() => handleAddToWishlist(product)}
                        >
                            <FavoriteBorderIcon className="mr-2" />
                            add to wishlist
                        </Button>
                        <Button>
                            <ShareIcon className="mr-2" />
                            add to compare
                        </Button>
                        <br />
                        <Button className={classes.addToCart}>
                            <ShoppingCartIcon className="mr-2" />
                            add to cart
                        </Button>

                    </div>
                    <div className={classes.zoom}>zoom</div>
                </div>
                {loader}
            </div>
        </>
    )
}

export default ProductInformation
