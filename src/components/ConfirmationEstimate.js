import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
export default function ConfirmationEstimate({ globalState }) {
  const [orderId, setOrderId] = useState("");

  useEffect(() => {
    setOrderId(globalState.orderId);
    Cookies.remove("visitorCookie");
  }, [globalState]);

  return (
    <div className="container">
      <h1 className="page-title">ET VOILÀ, LE FORMULAIRE EST TERMINÉ !</h1>
      <div className="form-section">
        <p style={{ fontWeight: "700" }}>
          Votre numéro de dossier est le :<span style={{ fontWeight: "bolder" }}>{orderId}</span>
        </p>
      </div>
    </div>
  );
}
