import React, { useEffect, useState } from "react";
import { Viewer } from "photo-sphere-viewer";
import "../../../node_modules/photo-sphere-viewer/dist/photo-sphere-viewer.css";

import MarkersPlugin from "../../../node_modules/photo-sphere-viewer/dist/plugins/markers";
import "../../../node_modules/photo-sphere-viewer/dist/plugins/markers.css";

const PanoView = ({ src, roomName }) => {
  const sphereElementRef = React.createRef();

  useEffect(() => {
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
            markers: [],
          },
        ],
      ],
    });

    var markersPlugin = viewer.getPlugin(MarkersPlugin);

    markersPlugin.on("select-marker", (e, marker) => {
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

    viewer.on("click", (e, data) => {
      if (!data.rightclick) {
        var newPolyMarkerName = "poly-new";
        var newPolyMarker = markersPlugin["markers"][newPolyMarkerName];
        if (newPolyMarker) {
          console.log("Update ");
          var polyArray = newPolyMarker["config"]["polylineRad"];
          polyArray.push([data.longitude, data.latitude]);

          markersPlugin.updateMarker({
            id: newPolyMarkerName,
            polylineRad: polyArray,
          });
        } else {
          console.log("adding marker");
          markersPlugin.addMarker({
            id: newPolyMarkerName,
            //need to add two positions because it errors out
            polylineRad: [
              [data.longitude, data.latitude],
              [data.longitude + 0.0001, data.latitude + 0.0001],
            ],
            svgStyle: {
              fill: "rgba(200, 0, 0, 0.2)",
              stroke: "rgba(200, 0, 50, 0.8)",
              strokeWidth: "2px",
            },
            tooltip: {
              content:
                "New marker to add. Click the button on nav bar when done",
              position: "right bottom",
            },
          });
        }
      }
    });

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