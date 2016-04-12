import React from 'react';
import ReactDOM from 'react-dom';

let Map = React.createClass({
  render: function() {
    return (
      <h2 className="map">
        Hi! I came from an async React module.
      </h2>
    );
  }
});

ReactDOM.render(
  <Map />,
  document.getElementById('map')
);
