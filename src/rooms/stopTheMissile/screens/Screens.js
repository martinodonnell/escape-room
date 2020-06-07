import React, { useState } from "react";
import { PanoView } from "../../../components/PanoView";
import { Modal, Button } from "react-bootstrap";
// import { Modal } from "../../../components/Modal";
// import { Modal } from "carbon-components-react";
// import "carbon-components/scss/globals/scss/styles.scss";
// import "../../../node_modules/carbon-components/scss/globals/scss/styles.scss";

import {
  blueRoomMarkers,
  ovalOfficeMarker,
  cabinetRoomMarker,
  situationRoomMarker,
} from "../markers";
import { NavPopUp } from "../../../components/MarkerContent/NavPopup";

const BlueRoom = (props) => {
  return (
    <div>
      <PanoView
        src={require("../assets/blue_room.png")}
        roomName="Blue Room"
        markers={blueRoomMarkers(props)}
      />
    </div>
  );
};

const CabinetRoom = (props) => {
  return (
    <div>
      <PanoView
        src={require("../assets/cabinet_room.png")}
        roomName="Blue Room"
        markers={cabinetRoomMarker(props)}
      />
    </div>
  );
};

const OvalOfficeRoom = ({ history }) => {
  function handleNav() {
    history.push("/path");
  }

  return (
    <div>
      {/* <Example /> */}
      <PanoView
        src={require("../assets/oval_office.png")}
        roomName="Blue Room"
        markers={ovalOfficeMarker(handleNav)}
      />
    </div>
  );
};

const SituationRoom = (props) => {
  return (
    <div>
      <PanoView
        src={require("../assets/situation_room.png")}
        roomName="Blue Room"
        markers={situationRoomMarker(props)}
      />
    </div>
  );
};

export { BlueRoom, CabinetRoom, OvalOfficeRoom, SituationRoom };
