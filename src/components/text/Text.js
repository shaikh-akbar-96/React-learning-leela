import { Component } from "react";

class Text extends Component {
  render() {
    return (
      <div>
        <div className="my-2">{this.props.text}</div>
      </div>
    );
  }
}

export default Text;
