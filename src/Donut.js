import React from 'react';


var DonutProgress = React.createClass({
  getInitialState() {
    return ({  });
  },

  render() {
    return (
      <svg viewBox="0 0 100 100">
        {/* background path */}
        <path fill="#F7931E" stroke="#000"
          d="
          m50,50
          l100,100
          "></path>
        {/* foreground stroke path */}
        <path></path>
      </svg>
    );
  }

});

export default DonutProgress;
