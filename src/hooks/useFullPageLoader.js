import React, { useState } from 'react'
import FullPageLoader from '../components/FullPageLoader'

function useFullPageLoader() {

    const [loading, setLoading] = useState(false)

    return [
        loading ? <FullPageLoader /> : null,
        () => setLoading(true),  // show loading
        () => setLoading(false)  // hide loading
    ]
}

export default useFullPageLoader
