import Navbar from "./components/Navbar";
import HomePage from "./views/HomePage";
import LoginPage from "./views/LoginPage";

import Container from "react-bootstrap/Container";

import { Switch, Route } from "react-router-dom";
import AboutPage from "./views/AboutPage";
import NotFoundPage from "./views/NotFoundPage";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </Container>
    </>
  );
}

export default App;
