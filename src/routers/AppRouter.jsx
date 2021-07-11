import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginScreen } from "../components/login/LoginScreen";
import { Marvelscreen } from "../components/marvel/Marvelscreen";
import { Navbar } from "../components/ui/NavBar";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/" component={Marvelscreen} />
        </Switch>
      </div>
    </Router>
  );
};
