import React, { useState } from "react";
import { Remarkable } from "remarkable";
import "./App.css";

const App = props => {
  const [mdCode, setMdCode] = useState("Type your *markdown* here!");

  const mdTextChangeHandler = e => {
    setMdCode(e.target.value);
  };

  const getRawMarkup = () => {
    const md = new Remarkable();
    return { __html: md.render(mdCode) };
  };

  return (
    <div className="App">
      <div className="container">
        <div className="input">
          <h3>Input</h3>
          <textarea
            className="input-text"
            onChange={mdTextChangeHandler}
            defaultValue={mdCode}
          />
        </div>
        <div className="output">
          <h3>Markdown</h3>
          <div
            dangerouslySetInnerHTML={getRawMarkup()}
            className="output-text"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default App;
