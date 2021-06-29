import { Box } from "@material-ui/core";
import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import ProductInformation from "./pages/ProductInformation";
import ListPage from "./pages/ListPage";
import ListPageByCategory from "./pages/ListPageByCategory";

function Products() {
  const match = useRouteMatch();

  return (
    <Box>
      <Switch>
        <Route exact path={match.url} component={ListPage} />
        <Route
          exact
          path={`${match.url}/category/:slug`}
          component={ListPageByCategory}
        />
        <Route
          path={`${match.url}/:productId`}
          component={ProductInformation}
        />
      </Switch>
    </Box>
  );
}

export default Products;
