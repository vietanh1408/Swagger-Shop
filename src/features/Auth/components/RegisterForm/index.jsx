import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import InputField from '../../../../components/FormControl/InputField'
import './styles.scss'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import useFullPageLoader from './../../../../hooks/useFullPageLoader'

function RegisterForm(props) {
    let schema = yup.object().shape({
        socialTitle: yup.string().required(),
        firstName: yup.string().required('Please enter your first name !'),
        lastName: yup.string().required('Please enter your last name !'),
        email: yup.string().email('Email is invalid !').required('Please enter your email !'),
        password: yup.string().min(6, 'Password must be 6 charactors at least !').required('Please enter your password !'),
        birthDate: yup.string().required('Please enter your birthdate !')
    })

    const { register, handleSubmit, errors, reset } = useForm({
        defaultValues: {
            socialTitle: '',
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            birthDate: '',
            checkbox3: false
        },
        resolver: yupResolver(schema)
    })

    const [loader, showLoader, hideLoader] = useFullPageLoader()

    const onSubmit = (values, e) => {
        const { onSubmit } = props
        showLoader()
        setTimeout(() => {
            if (onSubmit) {
                onSubmit(values)
            }
            e.target.reset()
            hideLoader()
        }, 3000)
    }


    return (
        <>
            <form className="register__form" onSubmit={handleSubmit(onSubmit)}>
                <p>Already have an account? <Link to="sign-in">Log in instead!</Link></p>

                <div className="form-group-radio">
                    <label>*Social Title</label>
                    <div>
                        <label className="radio">
                            <span className="radio__input">
                                <input type="radio" name="socialTitle" value="Mr" ref={register} />
                                <span className="radio__control" />
                            </span>
                            <span className="radio__label">Mr</span>
                        </label>
                        <label className="radio">
                            <span className="radio__input">
                                <input type="radio" name="socialTitle" value="Mrs" ref={register} />
                                <span className="radio__control" />
                            </span>
                            <span className="radio__label">Mrs</span>
                        </label>
                    </div>

                    {/* <div>
                    <input type="radio" ref={register} name="socialTitle" value="Mr" />
                    <label>Mr.</label>

                    <input type="radio" ref={register} name="socialTitle" value="Mrs" />
                    <label>Mrs.</label>
                </div> */}
                    <span></span>
                </div>
                <InputField errors={errors} inputRef={register} type="text" name="firstName" label="*First name" />
                <InputField errors={errors} inputRef={register} type="text" name="lastName" label="*Last name" />
                <InputField errors={errors} inputRef={register} type="email" name="email" label="*Email" />
                <InputField errors={errors} inputRef={register} type="password" name="password" label="*Password" />
                <InputField errors={errors} inputRef={register} type="date" name="birthDate" label="*Birthdate" />
                <InputField errors={errors}
                    inputRef={register} type="checkbox" name="checkbox1"
                    label="Receive offers from our partners" />
                <InputField errors={errors}
                    inputRef={register} type="checkbox"
                    name="checkbox2"
                    label="Sign up for our newsletter Be the first to know about our new arrivals and exclusive offers." />
                <InputField errors={errors}
                    inputRef={register}
                    type="checkbox" name="checkbox3"
                    label="*I agree to the terms and conditions and the privacy policy" />

                <button className="btn btn-dark">Save</button>
            </form>
            {loader}
        </>
    )
}

export default RegisterForm
