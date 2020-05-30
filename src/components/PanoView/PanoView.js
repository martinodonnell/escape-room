import React, { useEffect } from "react";
import { Viewer } from "photo-sphere-viewer";
import "../../../node_modules/photo-sphere-viewer/dist/photo-sphere-viewer.css";

const PanoView = ({ src }) => {
  const sphereElementRef = React.createRef();

  useEffect(() => {
    const shperePlayerInstance = new Viewer({
      container: sphereElementRef.current,
      panorama: src,
      navbar: ["autorotate", "zoom"],
      loadingTxt: "hello",
    });

    // unmount component instructions
    return () => {
      shperePlayerInstance.destroy();
    };
  }, [sphereElementRef]); // will only be called when the src prop gets updated

  return (
    <div>
      <div className="viewer" ref={sphereElementRef} />
    </div>
  );
};

export default PanoView;
