import { yupResolver } from '@hookform/resolvers/yup'
import { Button, makeStyles } from '@material-ui/core'
import { min } from 'lodash-es'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import InputField from '../../../components/FormControl/InputField'

const useStyles = makeStyles(theme => ({
    button: {
        backgroundColor: '#b79b6c',
        color: '#fff',
    }
}))

function UserInfo(props) {

    const classes = useStyles()
    let schema = yup.object().shape({
        fullname: yup.string().min(6, 'Fullname must be at least 6 characters !').required('Please enter your fullname !'),
        address: yup.string().required('Please enter your address !'),
        phone: yup.string().min(9, 'Your phone is invalid !').required('Please enter your phone !'),

    })

    const { register, handleSubmit, errors, reset } = useForm({
        defaultValues: {
            fullname: '',
            address: '',
            phone: '',
        },
        resolver: yupResolver(schema)
    })
    const onSubmitCustomerForm = (values) => {
        const { onSubmit } = props
        if (onSubmit) {
            onSubmit(values)
        }
        reset()
    }

    return (
        <div>
            <form className="login-form" onSubmit={handleSubmit(onSubmitCustomerForm)}>
                <legend>Customer Information</legend>
                <InputField errors={errors} inputRef={register} type="fullname" name="fullname" label="Fullname" />
                <InputField errors={errors} inputRef={register} type="address" name="address" label="Address" />
                <InputField errors={errors} inputRef={register} type="phone" name="phone" label="Phone" />

                <div className="login-form__btn">
                    <Button type="submit" className={classes.button} size="large">
                        Check out
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default UserInfo
