import { Component } from "react";

class Button extends Component {
  render() {
    return (
      <div>
        <div className="my-2">{this.props.text}</div>
      </div>
    );
  }
}

export default Button;
