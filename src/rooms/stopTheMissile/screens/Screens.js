import React from "react";
import { PanoView } from "../../../components/PanoView";
import {
  blueRoomMarkers,
  ovalOfficeMarker,
  cabinetRoomMarker,
  situationRoomMarker,
} from "../markers";

const BlueRoom = () => {
  return (
    <div>
      <PanoView
        src={require("../assets/blue_room.png")}
        roomName="Blue Room"
        markers={blueRoomMarkers}
      />
    </div>
  );
};

const CabinetRoom = () => {
  return (
    <div>
      <PanoView
        src={require("../assets/cabinet_room.png")}
        roomName="Blue Room"
        markers={cabinetRoomMarker}
      />
    </div>
  );
};

const OvalOfficeRoom = () => {
  return (
    <div>
      <PanoView
        src={require("../assets/oval_office.png")}
        roomName="Blue Room"
        markers={ovalOfficeMarker}
      />
    </div>
  );
};

const SituationRoom = () => {
  return (
    <div>
      <PanoView
        src={require("../assets/situation_room.png")}
        roomName="Blue Room"
        markers={situationRoomMarker}
      />
    </div>
  );
};

export { BlueRoom, CabinetRoom, OvalOfficeRoom, SituationRoom };
