import React, { useState } from "react";
import { PanoView } from "./components/PanoView";

function App() {
  const [src, setSrc] = useState("");

  const handleChange = (event) => {
    console.log(event.target.files[0]);
    setSrc(event.target.files[0]);
  };

  return (
    <div>
      {src ? (
        <PanoView
          src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Colonia_Ulpia_Traiana_-_Rekonstruktion_r%C3%B6mischer_Schiffe-0010560.jpg"
          roomName="Boat Room"
        />
      ) : (
        <div>
          <input type="file" onChange={handleChange} />
        </div>
      )}
    </div>
  );
}

export default App;
