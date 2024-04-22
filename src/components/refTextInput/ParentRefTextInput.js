import React, { Component } from "react";
import RefTextInput from "./refTextInput";

export default class ParentRefTextInput extends Component {
  constructor(props) {
    super(props);
    this.componentRef = React.createRef();
  }
  componentDidMount() {
    this.componentRef.current.focusInput("Calling From Parent");
  }
  render() {
    return (
      <div>
        <RefTextInput ref={this.componentRef} />
      </div>
    );
  }
}
