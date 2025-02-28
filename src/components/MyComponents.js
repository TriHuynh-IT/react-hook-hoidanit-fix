import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "huynh minh tri",
    address: "tra vinh",
    age: "20",
  };
  handleClick = (event) => {
    console.log("click m ok");
    console.log("radom", Math.floor(Math.random() * 100 + 1));

    this.setState({
      name: "eric",
      age: Math.floor(Math.random() * 100 + 1),
    });
  };
  handleOnMover(event) {
    // console.log(event.pageX);
  }

  render() {
    return (
      <div>
        my name is {this.state.name} and I'm {this.state.age}
        <button onMouseOver={this.handleOnMover}>Hover click</button>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default MyComponent;
