import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { DcScreen } from "../components/dc/DcScreen";
import { HeroScreen } from "../components/heroes/HeroScreen";
import { Marvelscreen } from "../components/marvel/Marvelscreen";
import { Navbar } from "../components/ui/NavBar";

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <Switch>
          <Route exact path="/hero/:heroeId" component={HeroScreen} />
          <Route exact path="/marvel" component={Marvelscreen} />
          <Route exact path="/dc" component={DcScreen} />
          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  );
};
