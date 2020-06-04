import React, { useState } from "react";

import { PanoView } from "../../../../components/PanoView";
import { UploadFile } from "../../../../components/UploadFile";

const UploadScreen = () => {
  const [src, setSrc] = useState("");

  return (
    <div>
      {src ? (
        <PanoView src={src} setSrc={setSrc} roomName="Boat Room" />
      ) : (
        <UploadFile
          setSrc={setSrc}
          preLoadedSrc={require("../../assets/test_room.jpg")}
        />
      )}
    </div>
  );
};

export default UploadScreen;
