import React, { useState } from "react";
import colors from "../colors";
import FillerPB from "./FillerPB";

export default function ProgressBar({ percentage }) {
  return (
    <div style={progressBar}>
      <FillerPB percentage={percentage} />
    </div>
  );
}

const progressBar = {
  position: "relative",
  width: "300px",
  height: "10px",
  backgroundColor: colors.lightgrey
};
