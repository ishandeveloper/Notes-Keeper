import React, {useState} from "react";

function NewNote(props) {
  const [textareaStyle, settextareaStyle] = React.useState({
    textAlign: "justfiy",
  });
  const [content, setcontent] = useState('')
  const [title, settitle] = useState('');
  
  function newnoteadded() {
      {props.add(title,content)};
      settitle('');
      setcontent('');
  }

  function textareaHeight(e) {
    settextareaStyle({
      height: e.target.scrollHeight + "px",
      textAlign: "justfiy",
      maxHeight: "500px",
    });
  }
  function titlechanged(e) {
      settitle(e.target.value);
  }
  function contentchanged(e) {
    setcontent(e.target.value);
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
              <input id="email" type="note" onChange={titlechanged} value={title} placeholder="Title" />
            </div>
            <p>
              <textarea
              value={content}
              onChange={contentchanged}
                style={textareaStyle}
                onInput={textareaHeight}
                placeholder="Take a note..."
                id="textarea1"
                className="materialize-textarea"
              ></textarea>
            </p>
          </div>
          <a onClick={newnoteadded} className="btn-floating btn-large halfway-fab waves-effect waves-dark blue">
            <i className="material-icons">add</i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewNote;
