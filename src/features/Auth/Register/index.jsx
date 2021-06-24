import React from 'react'
import RegisterForm from './Form'

function Register() {

    const onSubmit = (values) => {
        // fb.auth
        //     .createUserWithEmailAndPassword(values.email, values.password)
        //     .then(res => {
        //         console.log(res)
        //     }).catch(err => {
        //         console.log(err)
        //         if (err.code === 'auth/wrong-password') {
        //             setServerError('Invalid credentials')
        //         } else if (err.code === 'auth/user-not-found') {
        //             setServerError('No account for this email')
        //         } else {
        //             setServerError('Something went wrong :(')
        //         }
        //     })
    }

    return (
        <div className="register">
            <div className="container">
                <h1 className="register__heading mb-4">Create an account</h1>
                <RegisterForm onSubmit={onSubmit} />
            </div>
        </div>
    )
}

export default Register
