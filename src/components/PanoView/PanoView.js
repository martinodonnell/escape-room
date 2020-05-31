import React, { useEffect, useState } from "react";
import { Viewer } from "photo-sphere-viewer";
import "../../../node_modules/photo-sphere-viewer/dist/photo-sphere-viewer.css";

import MarkersPlugin from "../../../node_modules/photo-sphere-viewer/dist/plugins/markers";
import "../../../node_modules/photo-sphere-viewer/dist/plugins/markers.css";

const PanoView = ({ src, roomName }) => {
  const sphereElementRef = React.createRef();
  const [isPolyGenerate, setIsPolyGenerate] = useState(false);
  const [polyGrid, setPolyGrid] = useState(false);

  useEffect(() => {
    const viewer = new Viewer({
      container: sphereElementRef.current,
      //   panorama: src,
      panorama: "https://photo-sphere-viewer.js.org/assets/sphere.jpg",
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
        {
          id: "create-poly",
          title: "Create Poly",
          className: "custom-button-poly",
          content: "Create-Poly",
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
                  content: "A dynamic polysdsdsgon marker",
                  position: "right bottom",
                },
              },
              {
                // circle marker
                id: "start-poly",
                circle: 20,
                longitude: "0deg",
                latitude: "15deg",
                tooltip: "A circle marker",
              },
            ],
          },
        ],
      ],
    });

    var markersPlugin = viewer.getPlugin(MarkersPlugin);

    markersPlugin.on("select-marker", (e, marker) => {
      if (isPolyGenerate) {
        if (marker.id.localeCompare("start-poly") === 0) {
          console.log("Hello");
        }
        //  else {
        //   console.log("Not");
      }

      //   markersPlugin.updateMarker({
      //     id: marker.id,
      //     image: "assets/pin-blue.png",
      //   });
    });

    // unmount component instructions
    return () => {
      viewer.destroy();
    };
  }, [sphereElementRef, src, roomName, isPolyGenerate, setIsPolyGenerate]); // will only be called when the src prop gets updated

  return (
    <div>
      <div className="viewer" ref={sphereElementRef} />
    </div>
  );
};

export default PanoView;
