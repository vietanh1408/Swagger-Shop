// libs
import { Box } from "@material-ui/core";
import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
// components
import List from "./List";

const Categories = () => {
  const match = useRouteMatch();
  return (
    <Box>
      <Switch>
        <Route exact path={`${match.url}/:slug`} component={List} />
      </Switch>
    </Box>
  );
};

export default Categories;
