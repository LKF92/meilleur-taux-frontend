import React from "react";
import colors from "../colors";

export default function FillerPB({ percentage }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: colors.lightOrange,
        width: `${percentage}%`,
        height: "10px"
      }}
    >
      <div style={indicator}>{percentage}%</div>
    </div>
  );
}
const indicator = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  border: `4px solid ${colors.lightOrange}`,
  backgroundColor: colors.orange,
  height: "50px",
  width: "50px",
  borderRadius: "30px",
  position: "absolute"
};
