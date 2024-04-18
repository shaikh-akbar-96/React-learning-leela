import { Component } from "react";

class Dialogue extends Component {
  render() {
    return (
      <div>
        <div>Dialogue Data</div>
        <div>{this.props.children}</div>
      </div>
    );
  }
}
export default Dialogue;
