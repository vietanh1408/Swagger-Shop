import React from 'react'

const ProtectedRoute = () => {

    const token = localStorage.getItem('access-token')

    return (
        <Route
          {...rest}
          render={(props) =>
            token ? (
              <Component {...rest} {...props} />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
      );
}

export default ProtectedRoute
