import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../features/Auth/userSlice'
import { fb } from '../service/firebase'


export const useAuth = () => {
    const [authUser, setAuthUser] = useState()

    useEffect(() => {
        const unsubscribe = fb.auth.onAuthStateChanged(user => {
            if (user) {
                setAuthUser(user)
            } else {
                setAuthUser(null)
            }
        })

        return unsubscribe

    }, [])

    return {
        authUser
    }

}

