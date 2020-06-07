import React, { useEffect, useState, createRef } from "react";
import { Viewer } from "photo-sphere-viewer";
import "../../../node_modules/photo-sphere-viewer/dist/photo-sphere-viewer.css";

import MarkersPlugin from "photo-sphere-viewer/dist/plugins/markers";
import "../../../node_modules/photo-sphere-viewer/dist/plugins/markers.css";
import { Modal } from "../Modal";

const PanoView = ({ src, roomName, markers }) => {
  const sphereElementRef = createRef();
  const [viewer, setViewer] = useState(null);
  // const [isModelOpen, setIsModelOpen] = useState(false);

  // const selectModal = () => {
  //   setIsModelOpen(!isModelOpen);
  // };

  useEffect(() => {
    var viewer_ = new Viewer({
      container: sphereElementRef.current,
      panorama: src,
      loadingTxt: "Loading",
      caption: roomName,
      navbar: [
        "zoom",
        {
          id: "my-button",
          title: "Hello world",
          className: "custom-button",
          content: "Help",
          // onClick: () => selectModal(),
        },
        "caption",
        "fullscreen",
      ],
      plugins: [
        [
          MarkersPlugin,
          {
            markers: markers,
          },
        ],
      ],
    });

    var markersPlugin = viewer_.getPlugin(MarkersPlugin);

    markersPlugin.on("select-marker", (e, marker, data) => {
      var text = "";
      text += "{";
      text += "id: 'REMOVE',";
      text += "polylineRad: ";
      text += JSON.stringify(marker["config"]["polylineRad"]);
      text += ",";
      text += "svgStyle: {";
      text += "fill: 'rgba(200, 0, 0, 0.2)',";
      text += "stroke: 'rgba(200, 0, 50, 0.8)',";
      text += "strokeWidth: '2px',";
      text += "},";
      text += "tooltip: {";
      text += "  content: 'A dynamic polysdsdsgon marker',";
      text += "  position: 'right bottom',";
      text += "},";
      text += "},";
      console.log(text);
    });

    // viewer_.on("click", (e, data) => {
    //   if (!data.rightclick) {
    //     var newPolyMarkerName = "poly-new";
    //     var newPolyMarker = markersPlugin["markers"][newPolyMarkerName];
    //     if (newPolyMarker) {
    //       console.log("Update ");
    //       var polyArray = newPolyMarker["config"]["polylineRad"];
    //       polyArray.push([data.longitude, data.latitude]);

    //       markersPlugin.updateMarker({
    //         id: newPolyMarkerName,
    //         polylineRad: polyArray,
    //       });
    //     } else {
    //       console.log("adding marker");
    //       markersPlugin.addMarker({
    //         id: newPolyMarkerName,
    //         //need to add two positions because it errors out
    //         polylineRad: [
    //           [data.longitude, data.latitude],
    //           [data.longitude + 0.0001, data.latitude + 0.0001],
    //         ],
    //         svgStyle: {
    //           fill: "rgba(200, 0, 0, 0.2)",
    //           stroke: "rgba(200, 0, 50, 0.8)",
    //           strokeWidth: "2px",
    //         },
    //         tooltip: {
    //           content:
    //             "New marker to add. Inspect page, open console and send me the print out when you click it",
    //           position: "right bottom",
    //         },
    //       });
    //     }
    //   }
    // });

    // unmount component instructions
    return () => {
      viewer_.destroy();
    };
  }, [viewer, sphereElementRef, src, roomName, setViewer, markers]); // will only be called when the src prop gets updated

  return (
    <div>
      <div className="viewer" ref={sphereElementRef} />
      {/* <Modal
        displayModal={isModelOpen}
        modalInfo={"info"}
        closeModal={selectModal}
      /> */}
    </div>
  );
};

export default PanoView;
