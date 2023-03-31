import React from 'react';

class Children extends React.Component {
  render() {
    console.log(
      this.props
    );
    const string = 'Children';
    const number = 3;

    return (
      <div>
        {string}
        <br/>
        {number}
        <p>
          {this.props.myFirstChildren}
        </p>
        <p>
          {this.props.mySecondChildren}
        </p>
        <p>
          {this.props.myThirdChildren}
        </p>
      </div>
    )
  }
}

export default Children;