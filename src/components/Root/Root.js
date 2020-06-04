import React from "react";
import { Route, Switch } from "react-router-dom";
import { Nav } from "../Nav";
import { BrowserRouter } from "react-router-dom";

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
      <Nav />
      <Route component={UploadScreen} exact path="/" />
      <Route component={HomeScreen} exact path="/stop-missile" />
      <Route component={BlueRoom} path="/blue-room" />
      <Route component={CabinetRoom} path="/cabinet-room" />
      <Route component={OvalOfficeRoom} path="/oval-office" />
      <Route component={SituationRoom} path="/situation-room" />
      <ovalOfficeRoom />
    </div>
  );
};

export default Root;
