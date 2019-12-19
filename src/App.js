import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
  const [globalState, setGlobalState] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const visitorCookie = Cookies.get("visitorCookie");

  useEffect(() => {
    const checkCookies = () => {
      if (visitorCookie === undefined) {
        console.log("let's create a cookie!");
        Cookies.set("visitorCookie", {
          lastPage: 1,
          globalState: globalState
        });
      } else {
        console.log("found a cookie from you :", Cookies.get("visitorCookie"));
        let visitorCookie = Cookies.getJSON("visitorCookie");
        setGlobalState({ ...visitorCookie.globalState });
        console.log("last page from cookies", visitorCookie.lastPage);
        setCurrentPage(visitorCookie.lastPage);
      }
    };
    checkCookies();
  }, []);

  // We save the global state in the cookies everytimes it is modified
  useEffect(() => {
    console.log("GLOBAL STATE from App.js =====>", globalState);

    console.log("saving change in cookies (wether form inputs or page numbers");
    Cookies.set("visitorCookie", { lastPage: currentPage, globalState: globalState });
  }, [globalState, currentPage]);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/demande-simulation/credit-immobilier/step2">
          <Step2
            globalState={globalState}
            setGlobalState={setGlobalState}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </Route>
        <Route path="/demande-simulation/credit-immobilier/step3">
          <Step3
            globalState={globalState}
            setGlobalState={setGlobalState}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </Route>
        <Route path="/demande-simulation/credit-immobilier/step4">
          <Step4
            globalState={globalState}
            setGlobalState={setGlobalState}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </Route>
        <Route path="/demande-simulation/credit-immobilier/step5">
          <Step5
            globalState={globalState}
            setGlobalState={setGlobalState}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </Route>
        <Route path="/demande-simulation/credit-immobilier/step6">
          <Step6
            globalState={globalState}
            setGlobalState={setGlobalState}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </Route>
        <Route path="/">
          <Step1
            globalState={globalState}
            setGlobalState={setGlobalState}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
