import React, { useRef } from "react";
import {} from "@fortawesome/free-brands-svg-icons";
import {
  faDownload,
  faSave,
  faFileUpload,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Buttons.css";

const Buttons = (props) => {
  const inputFile = useRef(null);

  const fileUploadHandler = (e) => {
    inputFile.current.click();
  };

  const readFile = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = async (e) => {
      const text = e.target.result;
      props.onFileUpload(text);
    };
    reader.readAsText(e.target.files[0]);
  };

  return (
    <div className="Buttons">
      <div className="Button" onClick={fileUploadHandler}>
        <FontAwesomeIcon
          className="iconClass"
          icon={faFileUpload}
          color="#c2c2c2"
          size="lg"
        />
        <input
          type="file"
          id="file"
          ref={inputFile}
          style={{ display: "none" }}
          onChange={(e) => readFile(e)}
        />
        <span className="buttonHoverText">Upload</span>
      </div>
      <div className="Button" onClick={props.onDownload}>
        <FontAwesomeIcon
          className="iconClass"
          icon={faDownload}
          color="#c2c2c2"
          size="lg"
        />
        <span className="buttonHoverText">Download</span>
      </div>
      <div className="Button" onClick={props.onSave}>
        <FontAwesomeIcon
          className="iconClass"
          icon={faSave}
          color="#c2c2c2"
          size="lg"
        />
        <span className="buttonHoverText">Browser Save</span>
      </div>

      <div className="Button" onClick={props.onRead}>
        <FontAwesomeIcon
          className="iconClass"
          icon={faBook}
          color="#c2c2c2"
          size="lg"
        />
        <span className="buttonHoverText">Reading Mode</span>
      </div>
    </div>
  );
};

export default Buttons;
