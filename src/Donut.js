import React from 'react';


var DonutProgress = React.createClass({
  getInitialState() {
    return ({  });
  },

  render() {
    let radius = `${100}`;
    let circumference = `${2 * radius}`;

    // banging head against wall but just found answer to arc dilemma for full circle: http://stackoverflow.com/a/10477334
    return (
      <svg viewBox="0 0 100 100">
        {/* background path */}
        <path fill="#F7931E" stroke="#000"
          d={`
            m50 50,
            a ${radius} ${radius},
            0, 1, 1,
          ${circumference}, ${circumference}`}>
        </path>
        {/* foreground stroke path */}
        <path></path>
      </svg>
    );
  }

});

export default DonutProgress;
