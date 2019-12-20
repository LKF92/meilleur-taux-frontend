import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import InputRow from "./InputRow";
import colors from "../colors";
import PageNavigation from "./PageNavigation";
import Flatdesign from "../assets/visuel-desktop-email.jpg";
import TickedBox from "../components/TickedBox";
import BoxIcon from "../components/BoxIcon";
import axios from "axios";

export default function Step6({ globalState, setGlobalState, setCurrentPage }) {
  const [email, setEmail] = useState("");
  const [isAccepted, setIsAccepted] = useState(false);
  const history = useHistory();

  // Copy any value to state
  useEffect(() => {
    let copy = { ...globalState };
    copy.email = email;
    setGlobalState(copy);
  }, [email]);

  // Get values from previous session from cookies (from App.js)
  useEffect(() => {
    if (globalState.email) setEmail(globalState.email);
  }, [globalState]);

  const validateEstimate = async globalState => {
    try {
      const response = await axios.post(
        "http://localhost:3000/estimate/new",
        // "https://meilleur-taux-backend.herokuapp.com/estimate/new",
        globalState
      );
      if (response) {
        console.log(response.data.newEstimate.orderId);
        setGlobalState({ ...globalState, orderId: response.data.newEstimate.orderId });
        history.push("/demande-simulation/credit-immobilier/confirmation");
      } else {
        alert("oops..something went wrong");
      }
    } catch (error) {
      alert(error.message);
    }
  };

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
          style={{ backgroundColor: colors.grey }}
        />
        <p style={CGV}>
          {isAccepted ? (
            <span style={mgR} onClick={() => setIsAccepted(false)}>
              <TickedBox />
            </span>
          ) : (
            <span style={mgR} onClick={() => setIsAccepted(true)}>
              <BoxIcon />
            </span>
          )}
          J'accèpte de recevoir par email des propositions de MeilleurTaux.com
        </p>
      </div>
      <PageNavigation
        currentPage={7}
        setCurrentPage={setCurrentPage}
        next={() => (email && isAccepted ? true : false)}
        validateEstimate={() => validateEstimate(globalState)}
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
  padding: "30px",
  marginRight: "30px",
  fontSize: "18px",
  lineHeight: "30px",
  color: "white",
  fontWeight: "bold",
  backgroundColor: colors.orange
};
const mgR = {
  marginRight: "10px"
};
const CGV = {
  fontWeight: "bold"
};
