import React from "react";

function NewNote() {
  const [textareaStyle, settextareaStyle] = React.useState({
    textAlign: "justfiy",
  });

  function textareaHeight(e) {
    console.log("INPUT");
    settextareaStyle({
      height: e.target.scrollHeight + "px",
      textAlign: "justfiy",
      maxHeight: "500px",
    });
  }

  return (
    <div className="newnote">
      <div className="col s12 m6">
        <div className="card">
          <div className="card-image">
            <span className="card-title"></span>
          </div>
          <div className="card-content">
            <div className="input-title">
              <input id="email" type="note" placeholder="Title" />
            </div>
            <p>
              <textarea
                style={textareaStyle}
                onInput={textareaHeight}
                placeholder="Take a note..."
                id="textarea1"
                className="materialize-textarea"
              ></textarea>
            </p>
          </div>
          <a className="btn-floating btn-large halfway-fab waves-effect waves-dark blue">
            <i className="material-icons">add</i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewNote;
