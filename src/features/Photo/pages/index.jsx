import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import NotFound from "../../../components/NotFound";
import AddEditPage from "./AddEdit";
import MainPage from "./Main";

function Photo(props) {
  const match = useRouteMatch();

  return (<Switch>
    <Route exact path={match.url} component={MainPage}/>
    <Route exact path={`${match.url}/add`} component={MainPage}/>
    <Route exact path={`${match.url}/:photoId`} component={AddEditPage}/>

    <Route component={NotFound}/>
  </Switch>);
}

export default Photo;
