import { useEffect, useState } from 'react'
import { fb } from '../service/firebase'


export const useAuth = () => {
    const [authUser, setAuthUser] = useState()

    useEffect(() => {
        const unsubcribe = fb.auth.onAuthStateChanged(user => {
            if (user) {
                setAuthUser(user)
            } else {
                setAuthUser(null)
            }
        })

        return unsubcribe

    }, [])

    return {
        authUser
    }

}

