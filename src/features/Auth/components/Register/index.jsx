import React from 'react'
import RegisterForm from '../RegisterForm'

function Register() {

    const onSubmit = (values) => {
        console.log('information: ', values)
    }


    return (
        <div className="register">
            <div className="container">
                <h1 className="register__heading">Create an account</h1>
                <RegisterForm onSubmit={onSubmit} />
            </div>
        </div>
    )
}

export default Register
