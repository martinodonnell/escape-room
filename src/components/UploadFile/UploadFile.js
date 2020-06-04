import React from "react";

const UploadFile = ({ setSrc, preLoadedSrc }) => {
  const handleChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.addEventListener(
      "load",
      function () {
        // convert image file to base64 string
        setSrc(reader.result);
      },
      false
    );

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const usePreLoadingPanoram = () => {
    setSrc(preLoadedSrc);
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
        <input type="file" onChange={handleChange} name="file" />
        <button onClick={usePreLoadingPanoram}>
          Click here to use a pre-set panorama
        </button>
      </div>
    </div>
  );
};

export default UploadFile;
