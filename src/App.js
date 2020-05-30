import React from "react";
import { PanoView } from "./components/PanoView";

function App() {
  return (
    <PanoView
      src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Colonia_Ulpia_Traiana_-_Rekonstruktion_r%C3%B6mischer_Schiffe-0010560.jpg"
      roomName="Boat Room"
    />
  );
}

export default App;
