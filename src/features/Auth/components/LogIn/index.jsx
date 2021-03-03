import React from 'react'
import LogInForm from '../LogInForm'

function LogIn() {
    return (
        <div className="log-in">
            <div className="container">
                <h1 className="log-in__heading">Log in to your account</h1>
                <LogInForm />
            </div>
        </div>
    )
}

export default LogIn
