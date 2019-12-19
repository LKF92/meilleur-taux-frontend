import React, { useState } from "react";
import InfoIcon from "./InfoIcon";
import SelectionBox from "./SelectionBox";
import PageNavigation from "./PageNavigation";
import Cookies from "js-cookie";

export default function Step1({ globalState, setGlobalState, currentPage, setCurrentPage }) {
  const [typeOfProperty, setTypeOfProperty] = useState("");
  return (
    <div className="container">
      <h1 className="page-title">
        TYPE DE BIEN <InfoIcon />
      </h1>
      <div className="choices">
        <SelectionBox text="Maison" setSelection={setTypeOfProperty} selection={typeOfProperty} />
        <SelectionBox
          text="Appartement"
          setSelection={setTypeOfProperty}
          selection={typeOfProperty}
        />
      </div>
      <PageNavigation
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setGlobalState={() => {
          let copy = { ...globalState };
          copy.typeOfProperty = typeOfProperty;
          setGlobalState(copy);
        }}
        setCookies={() =>
          Cookies.set("visitorCookie", { lastPage: currentPage, globalState: globalState })
        }
      />
    </div>
  );
}
