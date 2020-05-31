import React, { useState } from "react";
import { PanoView } from "./components/PanoView";
import { UploadFile } from "./components/UploadFile";
import "./App.css";

function App() {
  const [src, setSrc] = useState("");

  return (
    <div>
      {src ? (
        <PanoView src={src} setSrc={setSrc} roomName="Boat Room" />
      ) : (
        <UploadFile setSrc={setSrc} />
      )}
    </div>
  );
}

export default App;
