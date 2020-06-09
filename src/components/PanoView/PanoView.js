import React, { useEffect, useState, createRef } from "react";
import { Viewer } from "photo-sphere-viewer";
import "../../../node_modules/photo-sphere-viewer/dist/photo-sphere-viewer.css";

import MarkersPlugin from "photo-sphere-viewer/dist/plugins/markers";
import "../../../node_modules/photo-sphere-viewer/dist/plugins/markers.css";

import { Modal, Button } from "react-bootstrap";

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

const PanoView = ({ src, roomName, markers }) => {
  const sphereElementRef = createRef();
  const [viewer, setViewer] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          onClick: () => handleShow(),
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

    // unmount component instructions
    return () => {
      viewer_.destroy();
    };
  }, []); // will only be called when the src prop gets updated

  return (
    <div>
      <div className="viewer" ref={sphereElementRef} />
      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PanoView;
