import React, { useState } from "react";
import InfoIcon from "./InfoIcon";
import SelectionBox from "./SelectionBox";
import PageNavigation from "./PageNavigation";
import Cookies from "js-cookie";

export default function Step2({ globalState, setGlobalState, currentPage, setCurrentPage }) {
  const visitorCookie = Cookies.getJSON("visitorCookie");
  console.log(visitorCookie);
  const [conditionOfProperty, setConditionOfProperty] = useState("Appartement");
  return (
    <div className="container">
      <h1 className="page-title">
        ÉTAT DU BIEN <InfoIcon />
      </h1>
      <div className="choices">
        <SelectionBox
          text="Ancien"
          setSelection={setConditionOfProperty}
          selection={conditionOfProperty}
        />
        <SelectionBox
          text="Neuf"
          setSelection={setConditionOfProperty}
          selection={conditionOfProperty}
        />
      </div>
      <PageNavigation
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setGlobalState={() => {
          let copy = { ...globalState };
          copy.conditionOfProperty = conditionOfProperty;
          setGlobalState(copy);
        }}
        setCookies={() =>
          Cookies.set("visitorCookie", { lastPage: currentPage, globalState: globalState })
        }
      />
    </div>
  );
}
