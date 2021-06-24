import React from 'react'
import { useDispatch } from 'react-redux'
import { authLogin } from '../../../reducer/authentication'
import LogInForm from './Form'

function LogIn() {

    const dispatch = useDispatch()

    const handleSubmitLoginForm = async (values) => {
        await dispatch(authLogin(values))
    }

    return (
        <div className="log-in">
            <div className="container">
                <h1 className="log-in__heading">Log in to your account</h1>
                <LogInForm onSubmit={handleSubmitLoginForm} />
            </div>
        </div>
    )
}

export default LogIn
