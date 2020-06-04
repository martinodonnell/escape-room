import React from "react";
import { renderToString } from "react-dom/server";
import { TextPopUp } from "../../components/MarkerContent/TextPopup";

const blueRoomMarkers = [];
const ovalOfficeMarker = [
  {
    id: "door-left",
    polylineRad: [
      [4.895672142756683, 0.15352716814410394],
      [4.895772142756683, 0.15362716814410393],
      [5.102667472382407, 0.14696359789338365],
      [5.104406304464969, -0.31145891556089556],
      [4.896124957077513, -0.3314231591593546],
    ],
    svgStyle: {
      fill: "rgba(200, 0, 0, 0.2)",
      stroke: "rgba(200, 0, 50, 0.8)",
      strokeWidth: "2px",
    },
    tooltip: {
      content: "A dynamic polysdsdsgon marker",
      position: "right bottom",
    },
    content: renderToString(<TextPopUp />),
  },
];
const cabinetRoomMarker = [];
const situationRoomMarker = [];

export {
  blueRoomMarkers,
  ovalOfficeMarker,
  cabinetRoomMarker,
  situationRoomMarker,
};
