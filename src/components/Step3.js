import React, { useState } from "react";
import InfoIcon from "./InfoIcon";
import SelectionBox from "./SelectionBox";
import PageNavigation from "./PageNavigation";
import Cookies from "js-cookie";

export default function Step3({ globalState, setGlobalState, currentPage, setCurrentPage }) {
  const visitorCookie = Cookies.getJSON("visitorCookie");
  console.log(visitorCookie);
  const [useOfProperty, setUseOfProperty] = useState("Appartement");
  return (
    <div className="container">
      <h1 className="page-title">
        USAGE DU BIEN <InfoIcon />
      </h1>
      <div className="choices">
        <SelectionBox
          text="Résidence Principale"
          setSelection={setUseOfProperty}
          selection={useOfProperty}
        />
        <SelectionBox
          text="Résidence Secondaire"
          setSelection={setUseOfProperty}
          selection={useOfProperty}
        />
        <SelectionBox
          text="Investissement Locatif"
          setSelection={setUseOfProperty}
          selection={useOfProperty}
        />
      </div>
      <PageNavigation
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setGlobalState={() => {
          let copy = { ...globalState };
          copy.useOfProperty = useOfProperty;
          setGlobalState(copy);
        }}
        setCookies={() =>
          Cookies.set("visitorCookie", { lastPage: currentPage, globalState: globalState })
        }
      />
    </div>
  );
}
