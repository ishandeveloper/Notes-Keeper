import React from 'react';

function Card(props) {
    return <div>
      <div className="col s12 m3">
        <div className="card white lighten">
          <div className="card-content black-text">
            <span className="card-title">{props.title}</span>
            <p className="text-justify">
              {props.content}
            </p>
          </div>
          <div className="card-action"></div>
        </div>
      </div>
    </div>
}

export default Card;