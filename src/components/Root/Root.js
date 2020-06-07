import React from "react";
import { Route } from "react-router-dom";
// import { Nav } from "../../components/Nav";
import {
  BlueRoom,
  CabinetRoom,
  OvalOfficeRoom,
  SituationRoom,
  HomeScreen,
} from "../../rooms/stopTheMissile/screens";

import { UploadScreen } from "../../rooms/tutorial/screens";

const Root = () => {
  return (
    <div>
      {/* <Nav /> */}
      <Route component={UploadScreen} exact path="/" />
      <Route component={HomeScreen} path="/stop-missile" />
      <Route component={BlueRoom} path="/blue-room" />
      <Route component={CabinetRoom} path="/cabinet-room" />
      <Route component={OvalOfficeRoom} path="/oval-office" />
      <Route component={SituationRoom} path="/situation-room" />
    </div>
  );
};

export default Root;
