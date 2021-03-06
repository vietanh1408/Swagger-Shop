import React, { useState } from 'react'
import { fb } from '../../../../service/firebase'
import LogInForm from '../LogInForm'

function LogIn() {

    const [serverError, setServerError] = useState('')

    const handleSubmitLoginForm = (values) => {
        fb.auth
            .signInWithEmailAndPassword(values.email, values.password)
            .then(res => {
                if (!res.user) {
                    setServerError("We're having trouble logging you in. Please try again!")
                }
            }).catch(err => {
                console.log(err)
                if (err.code === 'auth/wrong-password') {
                    setServerError('Invalid credentials')
                } else if (err.code === 'auth/user-not-found') {
                    setServerError('No account for this email')
                } else {
                    setServerError('Something went wrong :(')
                }
            })
    }


    return (
        <div className="log-in">
            <div className="container">
                <h1 className="log-in__heading">Log in to your account</h1>
                <LogInForm onSubmit={handleSubmitLoginForm} serverError={serverError} />
            </div>
        </div>
    )
}

export default LogIn
