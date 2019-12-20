import React from "react";
import { Link } from "react-router-dom";
import colors from "../colors";
import ProgressBar from "./ProgressBar";

export default function PageNavigation({ currentPage, setCurrentPage, next, validateEstimate }) {
  return (
    <div style={pageNavigation}>
      {/* // Show the button 'previous page' except fo the first step */}
      {currentPage > 1 ? (
        <Link
          to={"/demande-simulation/credit-immobilier/step" + (currentPage - 1)}
          style={{ textDecoration: "none" }}
          onClick={() => {
            setCurrentPage(currentPage - 1);
          }}
        >
          <h3 style={previousPage}>Précédent</h3>
        </Link>
      ) : (
        <div></div>
      )}
      <div>
        <ProgressBar percentage={((currentPage / 8) * 100).toFixed(0)} />
      </div>
      {/* // Show the button 'next page' except fo the last step */}
      {currentPage < 7 && (
        <Link
          to={"/demande-simulation/credit-immobilier/step" + (currentPage + 1)}
          style={next() ? link : notAllowed}
          onClick={e => {
            if (next()) {
              setCurrentPage(currentPage + 1);
            } else {
              alert("vous devez renseigner les champs obligatoires");
              e.preventDefault();
            }
          }}
        >
          <h3 style={nextPage}>Suivant</h3>
        </Link>
      )}

      {currentPage > 6 && (
        <div
          style={next() ? link : notAllowed}
          onClick={e => {
            if (next()) {
              validateEstimate();
            } else {
              alert("vous devez accepter les CGV");
              e.preventDefault();
            }
          }}
        >
          <h3 style={nextPage}>Valider</h3>
        </div>
      )}
    </div>
  );
}

const pageNavigation = {
  padding: "0 30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
};
const previousPage = {
  textDecoration: "underline"
};
const nextPage = {
  padding: "0 10px",
  borderRadius: 5,
  backgroundColor: colors.orange,
  color: "white"
};
const link = {
  padding: "0 10px",
  borderRadius: 5,
  backgroundColor: colors.orange,
  color: "white",
  textDecoration: "none",
  cursor: "pointer"
};

const notAllowed = {
  padding: "0 10px",
  borderRadius: 5,
  backgroundColor: colors.orange,
  color: "white",
  textDecoration: "none",
  cursor: "not-allowed"
};
