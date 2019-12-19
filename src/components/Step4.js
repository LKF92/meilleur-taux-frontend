import React, { useState } from "react";
import InfoIcon from "./InfoIcon";
import SelectionBox from "./SelectionBox";
import PageNavigation from "./PageNavigation";
import Cookies from "js-cookie";

export default function Step4({ globalState, setGlobalState, currentPage, setCurrentPage }) {
  const visitorCookie = Cookies.getJSON("visitorCookie");
  console.log(visitorCookie);
  const [currentSituation, setCurrentSituation] = useState("Appartement");
  return (
    <div className="container">
      <h1 className="page-title">
        VOTRE SITUATION ACTUELLE <InfoIcon />
      </h1>
      <div className="choices">
        <SelectionBox
          text="Locataire"
          setSelection={setCurrentSituation}
          selection={currentSituation}
        />
        <SelectionBox
          text="Propriétaire"
          setSelection={setCurrentSituation}
          selection={currentSituation}
        />
        <SelectionBox
          text="Bénéficiaire d'un logement de fonction"
          setSelection={setCurrentSituation}
          selection={currentSituation}
        />
        <SelectionBox
          text="Hébergé à titre gratuit"
          setSelection={setCurrentSituation}
          selection={currentSituation}
        />
      </div>
      <PageNavigation
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setGlobalState={() => {
          let copy = { ...globalState };
          copy.currentSituation = currentSituation;
          setGlobalState(copy);
        }}
        setCookies={() =>
          Cookies.set("visitorCookie", { lastPage: currentPage, globalState: globalState })
        }
      />
    </div>
  );
}
