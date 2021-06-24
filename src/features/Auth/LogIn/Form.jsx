import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import * as yup from 'yup'
import InputField from '../../../components/FormControl/InputField'
import useFullPageLoader from '../../../hooks/useFullPageLoader'

function LogInForm(props) {

    const [loader, showLoader, hideLoader] = useFullPageLoader()

    let schema = yup.object().shape({
        email: yup.string().email('Email is invalid !').required('Please enter your email !'),
        password: yup.string().min(6, 'Password must be 6 charactors at least !').required('Please enter your password !'),
    })

    const { register, handleSubmit, errors, reset } = useForm({
        defaultValues: {
            email: '',
            password: ''
        },
        resolver: yupResolver(schema)
    })

    const onSubmit = (values) => {
        showLoader()
        const { onSubmit } = props
        setTimeout(() => {
            if (onSubmit) {
                onSubmit(values)
            }
            hideLoader()
        }, 3000)
    }

    return (
        <>
            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                <InputField errors={errors} inputRef={register} type="email" name="email" label="*Email" />
                <InputField errors={errors} inputRef={register} type="password" name="password" label="*Password" />

                <div className="login-form__btn">
                    <a href="#">Forgot your password?</a>
                    <button className="btn btn-dark">Sign in</button>
                    <hr />
                    <Link to="/register">
                        No account? Create one here
                    </Link>
                </div>
            </form>
            {loader}
        </>
    )
}

export default LogInForm
