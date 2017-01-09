import React from 'react';


var DonutProgress = React.createClass({
  getInitialState() {
    return ({  });
  },

  render() {
    let radius = `${25}`;
    let diameter = `${2 * radius}`;

    // banging head against wall but just found answer to arc dilemma for full circle: http://stackoverflow.com/a/10477334
    /*
      <path
      d="
      M cx cy - starting point, absolute value coordinates
      m -r, 0 - ending point, relative to the absolute value coordinates above
      a r,r 0 1,1, 0 (r * 2)  - arcPath line (first two arguments are the radii in x and y directions, xAxisRotate, LargeArcFlag, SweepFlag, destination x and y coordinates **visually 0 on x-axis and diameter on y-axis**)
      a r,r 0 1,1, 0 -(r * 2)  - second arcPath line (mirror image of above)
      "
      />
    */
    // radius and diameter should always be smaller than the viewbox width/height attribute values (will scale accordingly and fit within outer container)
    return (
      <svg viewBox="0 0 100 100">
        {/* background path */}
        <path fill="#F7931E" stroke="#000"
          d={`
            M50 50,
            m 0 ${-radius},
            a ${radius} ${radius}, 0, 1, 1, 0 ${diameter}
            a ${radius} ${radius}, 0, 1, 1, 0 ${-diameter}
          `}>
        </path>
        {/* foreground stroke path */}
        <path></path>
      </svg>
    );
  }

});

export default DonutProgress;
