import React from 'react'
import { useHistory } from 'react-router-dom'
import RegisterForm from '../RegisterForm'

function Register() {

    const history = useHistory()

    const onSubmit = (values) => {
        console.log('information: ', values)
        history.push('/sign-in')
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
