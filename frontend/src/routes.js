import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ModalContainer } from "react-router-modal";
import "react-router-modal/css/react-router-modal.css";
import App from "./components";
const Routes = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route path="/" component={App} />
        <Route path="*" component={() => <h1>Page not found</h1>} />
      </Switch>
      <ModalContainer />
    </Fragment>
  </BrowserRouter>
);

export default Routes;
