import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Step1 from "./components/Step1";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/demande-simulation/credit-immobilier/step1">
          <Step1 />
        </Route>

        {/* <Route path="/demande-simulation/credit-immobilier/step2">
          <Step2 />
        </Route>
        <Route path="/demande-simulation/credit-immobilier/step3">
          <Step3 />
        </Route>
        <Route path="/demande-simulation/credit-immobilier/step4">
          <Step4 />
        </Route>
        <Route path="/demande-simulation/credit-immobilier/step5">
          <Step5 />
        </Route>
        <Route path="/demande-simulation/credit-immobilier/step6">
          <Step6 />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
