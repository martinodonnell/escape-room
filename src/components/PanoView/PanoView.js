import React, { useEffect } from "react";
import { Viewer, MarkersPlugin } from "photo-sphere-viewer";
import "../../../node_modules/photo-sphere-viewer/dist/photo-sphere-viewer.css";

const PanoView = ({ src, roomName }) => {
  const sphereElementRef = React.createRef();

  useEffect(() => {
    src = "https://photo-sphere-viewer.js.org/assets/sphere.jpg";
    const viewer = new Viewer({
      container: sphereElementRef.current,
      panorama: src,
      loadingTxt: "hello",
      caption: roomName,
      navbar: [
        "zoom",
        {
          id: "my-button",
          title: "Hello world",
          className: "custom-button",
          content: "Help",
          onClick: () => alert("Nav Button press"),
        },
        "caption",
        "fullscreen",
      ],
      plugins: [
        [
          MarkersPlugin,
          {
            // list of markers
            markers: [
              {
                // polygon marker
                id: "polygon",
                polylineRad: [
                  [6.2208, 0.0906],
                  [0.0443, 0.1028],
                  [0.2322, 0.0849],
                  [0.4531, 0.0387],
                  [0.5022, -0.0056],
                  [0.4587, -0.0396],
                  [0.252, -0.0453],
                  [0.0434, -0.0575],
                  [6.1302, -0.0623],
                  [6.0094, -0.0169],
                  [6.0471, 0.032],
                  [6.2208, 0.0906],
                ],
                svgStyle: {
                  fill: "rgba(200, 0, 0, 0.2)",
                  stroke: "rgba(200, 0, 50, 0.8)",
                  strokeWidth: "2px",
                },
                tooltip: {
                  content: "A dynamic polygon marker",
                  position: "right bottom",
                },
              },
            ],
          },
        ],
      ],
    });

    const markersPlugin = viewer.getPlugin(MarkersPlugin);

    // unmount component instructions
    return () => {
      viewer.destroy();
    };
  }, [sphereElementRef, src, roomName]); // will only be called when the src prop gets updated

  return (
    <div>
      <div className="viewer" ref={sphereElementRef} />
    </div>
  );
};

export default PanoView;
