import React, { useEffect, useContext } from "react";
import { Route } from "react-router-dom";
// import { Nav } from "../../components/Nav";
import {
  BlueRoom,
  CabinetRoom,
  OvalOfficeRoom,
  SituationRoom,
  HomeScreen,
} from "../../rooms/stopTheMissile/screens";
import { ItemContext } from "../../context/ItemContextProvider";
import { UploadScreen } from "../../rooms/tutorial/screens";

const Root = () => {
  const { items, setC } = useContext(ItemContext);

  useEffect(() => {
    // setContext("sdsds");
  });

  return (
    <div>
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
