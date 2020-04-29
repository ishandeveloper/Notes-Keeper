import React from "react";
import Card from "./minors/card";

function Notes() {
  return (
    <div className="row">
      <Card
        title="First Note"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et
        lorem facilisis, scelerisque ipsum vel, sodales lectus. 
        In commodo tortor at dui condimentum, id cursus quam interdum.
        Integer vitae nibh sapien. Morbi tempus commodo erat id dictum."
      />
      <Card
        title="Second Note"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et
        lorem facilisis, scelerisque ipsum vel, sodales lectus. Nunc
        rutrum et arcu quis ullamcorper. In hac habitasse platea dictumst.
        In commodo tortor at dui condimentum, id cursus quam interdum.
        Integer vitae nibh sapien. Morbi tempus commodo erat id dictum."
      />
      <Card
        title="Third Note"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et
        lorem facilisis, scelerisque ipsum vel, sodales lectus. Nunc
        rutrum et arcu quis ullamcorper. In hac habitasse platea dictumst.
        In commodo tortor at dui condimentum, id cursus quam interdum.
        Integer vitae nibh sapien. Morbi tempus commodo erat id dictum."
      />
      <Card
        title="Fourth Note"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et
        lorem facilisis, scelerisque ipsum vel, sodales lectus. Nunc
        rutrum et arcu quis ullamcorper. In hac habitasse platea dictumst.
        In commodo tortor at dui condimentum, id cursus quam interdum.
        Integer vitae nibh sapien. Morbi tempus commodo erat id dictum."
      />
      <Card
        title="Fifth Note"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et
        lorem facilisis, scelerisque ipsum vel, sodales lectus. Nunc
        rutrum et arcu quis ullamcorper. "
      />
    </div>
  );
}

export default Notes;
