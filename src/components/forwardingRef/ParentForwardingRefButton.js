import React, { Component } from "react";
import ForwardingRefButton from "./ForwardingRefButton";

export default class ParentForwardingRefButton extends Component {
  constructor(props) {
    super(props);
    this.buttonRef = React.createRef();
  }
  componentDidMount() {
    console.log(this.buttonRef);
  }
  render() {
    return (
      <div>
        <ForwardingRefButton ref={this.buttonRef} />
      </div>
    );
  }
}
