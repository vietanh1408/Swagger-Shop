import { Box } from '@material-ui/core'
import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import ListPage from './pages/ListPage'

function Products() {

    const match = useRouteMatch()

    return (
        <Box>
            <Switch>
                <Route exact path={match.url} component={ListPage} />
            </Switch>
        </Box>
    )
}

export default Products
