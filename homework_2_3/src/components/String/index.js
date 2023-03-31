import React from 'react';

class String extends React.Component {
  render() {
      const string1 = 'string1';
      const string2 = 'string2';
      const string3 = 'string3';

    return (
      <div>
        <div> <h1> {string1} </h1> </div>
        <div> <h2> {string2} </h2></div>
        <div> <p> {string3} </p></div>
      </div>
    )
  }
}

export default String;