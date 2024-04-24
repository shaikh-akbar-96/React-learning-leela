import { Component } from "react";
import Cat from "./cat";

export default class MouseWithCat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
    };
  }
  handleMouseMove = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  };
  render() {
    return (
      <div
        style={{ height: "100vh", width: "100vw" }}
        onMouseMove={this.handleMouseMove}
      >
        <div>Please Move The Mouse Pointer</div>
        <div>
          The Mouse Poiner Position is x:{this.state.x} and y:{this.state.y}
        </div>
        <Cat mouse={this.state} />
      </div>
    );
  }
}