import React, { useState, Fragment, useEffect } from "react";
import { Remarkable } from "remarkable";

import "./App.css";
import Header from "./components/Header/Header";
import Buttons from "./components/Buttons/Buttons";

const App = (props) => {
  const [mdCode, setMdCode] = useState(
    "# New Document \nType your *markdown* here!"
  );
  const [readMode, setReadMode] = useState(false);

  const mdTextChangeHandler = (e) => {
    setMdCode(e.target.value);
  };

  const getRawMarkup = () => {
    const md = new Remarkable();
    return { __html: md.render(mdCode) };
  };

  const onDownloadHandler = () => {
    console.log("download");
  };

  const onFileUploadHandler = (text) => {
    setMdCode(text);
  };

  const onSaveHandler = () => {
    alert("Saved to the Browser");
    localStorage.setItem("content", mdCode);
  };

  const onReadHandler = () => {
    setReadMode(!readMode);
  };

  useEffect(() => {
    if (localStorage.getItem("content")) {
      setMdCode(localStorage.getItem("content"));
    }
  }, [setMdCode]);

  return (
    <Fragment>
      <Header />
      <Buttons
        onDownload={onDownloadHandler}
        onFileUpload={onFileUploadHandler}
        onSave={onSaveHandler}
        onRead={onReadHandler}
      />
      <div className="App">
        <div className="container">
          {readMode ? (
            ""
          ) : (
            <div className="input">
              <div className="inputTitle">Input</div>
              <textarea
                className="input-text"
                onChange={mdTextChangeHandler}
                value={mdCode}
              />
            </div>
          )}
          <div className="output">
            <div className="inputTitle">Markdown</div>
            <div
              dangerouslySetInnerHTML={getRawMarkup()}
              className="output-text"
            ></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
