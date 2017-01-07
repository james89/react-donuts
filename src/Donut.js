import React from 'react';


var DonutProgress = React.createClass({
  getInitialState() {
    return ({ currentStep: 1, formValues: {} });
  },

  render() {
    return (
      <svg></svg>
    );
  }

});

module.exports = DonutProgress;
