import React, { useState, useEffect } from "react";
import InputRow from "./InputRow";
import colors from "../colors";
import PageNavigation from "./PageNavigation";
import Flatdesign from "../assets/visuel-desktop-email.jpg";

export default function Step6({ globalState, setGlobalState, setCurrentPage }) {
  const [email, setEmail] = useState("");
  const [isAccepted, setIsAccepted] = useState(false);

  // Copy any value to state
  useEffect(() => {
    let copy = { ...globalState };
    copy.email = email;
    setGlobalState(copy);
  }, [email]);

  return (
    <div className="container">
      <h1 className="page-title">VOS COORDONNÉES</h1>
      <div style={flatDesignSection}>
        <div style={orangeBloc}>
          Un devis vous sera envoyé par mail avec récapitulatif de votre demande.
        </div>
        <img src={Flatdesign} alt="desktop flatdesign" />
      </div>
      <div className="form-section">
        <InputRow
          text="Adresse email emprunteur ?*"
          value={email}
          setValue={setEmail}
          after="€"
          style={{ backgroundColor: colors.grey }}
        />
      </div>
      <PageNavigation
        currentPage={7}
        setCurrentPage={setCurrentPage}
        next={() => (email && isAccepted ? true : false)}
      />
    </div>
  );
}
const flatDesignSection = {
  padding: "0 20px",
  display: "flex",
  flexFlow: "row nowrap",
  justifyContent: "center",
  alignItems: "center"
};
const orangeBloc = {
  width: "15%",
  padding: "40px",
  marginRight: "30px",
  fontSize: "18px",
  lineHeight: "30px",
  color: "white",
  fontWeight: "bold",
  backgroundColor: colors.orange
};
