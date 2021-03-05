import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import RegisterForm from '../RegisterForm'
import { fb } from './../../../../service/firebase'

function Register() {

    const history = useHistory()

    const [serverError, setServerError] = useState('')

    const onSubmit = (values) => {
        fb.auth
            .createUserWithEmailAndPassword(values.email, values.password)
            .then(res => {

                console.log(res)
                /* if(res?.user?.uid) {
                    
                } */
            })
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
