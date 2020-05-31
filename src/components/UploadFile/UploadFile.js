import React from "react";

const UploadFile = ({ setSrc }) => {
  const handleChange = (event) => {
    console.log(event.target.files[0]);
    setSrc(event.target.files[0]);
  };

  const usePreLoadingPanoram = () => {
    setSrc(require("../../assests/rooms/test_room.jpg"));
  };

  return (
    <div>
      <header>
        <h1>Uploading Panorama</h1>
      </header>
      <div id="content">
        <p>
          This is page will allow you to upload a panorama. You will then be
          able to mask out places in your picture that will be clickable in the
          escape room
        </p>
        <input type="file" onChange={handleChange} />
        <button onClick={usePreLoadingPanoram}>
          Click here to use a pre-set panorama
        </button>
      </div>
    </div>
  );
};

export default UploadFile;
