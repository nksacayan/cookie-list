import { Switch, Route } from "react-router-dom";

import HomePage from "../views/HomePage";
import AboutPage from "../views/AboutPage";
import LoginPage from "../views/LoginPage";
import NotFoundPage from "../views/NotFoundPage";
import RegisterPage from "../views/RegisterPage";

function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </>
  );
}

export default Routes;
