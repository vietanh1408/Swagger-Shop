import React from 'react'
import './styles.scss'
import { CONTENT_FOOTER } from './../../contants/ContentFooter'
import { Button, TextField } from '@material-ui/core'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    {CONTENT_FOOTER?.map((contentFooter, index) => {
                        return (
                            <div className="col col-xs-12 col-sm-6 col-md-3 col-lg-3" key={index}>
                                <h6 className="footer-heading">{contentFooter.title}</h6>
                                <ul className="footer-list">
                                    {contentFooter.list?.map((contentList, index) => {
                                        return (
                                            <li className="footer-list-item" key={50 + index}>
                                                <a href="#">{contentList}</a>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        )
                    })}
                    <div className="col col-xs-12 col-sm-6 col-md-3 col-lg-3">
                        <h6 className="footer-heading">NEWSLETTER</h6>
                        <p>Be the first to know about our new arrivals and exclusive offers.</p>
                        <form className="footer-form">
                            <TextField id="standard-basic" label="Your email address" />
                            <Button>
                                <Link to="/sign-up">
                                    Sign Up
                                </Link>
                            </Button>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="footer-logo d-flex justify-content-center my-5">
                            <img src="http://demo.posthemes.com/pos_ecolife_decoration/img/cms/payment.png" alt="footer-logo"></img>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="footer-copyright d-flex justify-content-center">
                            <span>Copyright © <Link to="/">Posthemes.</Link> All Rights Reserved</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
