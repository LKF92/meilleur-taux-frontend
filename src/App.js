import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom";
import "./App.css";
import Cookies from "js-cookie";
import Navbar from "./components/Navbar";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import Step5 from "./components/Step5";
import Step6 from "./components/Step6";

function App() {
  const stepId = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  console.log(stepId);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/demande-simulation/credit-immobilier/step/1">
          <Step1 currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </Route>
        <Route path="/demande-simulation/credit-immobilier/step/2">
          <Step2 currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </Route>
        <Route path="/demande-simulation/credit-immobilier/step/3">
          <Step3 currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </Route>
        <Route path="/demande-simulation/credit-immobilier/step/4">
          <Step4 currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </Route>
        <Route path="/demande-simulation/credit-immobilier/step/5">
          <Step5 currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </Route>
        <Route path="/demande-simulation/credit-immobilier/step/6">
          <Step6 currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
