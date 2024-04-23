import { Component } from "react";

export default class CallBackRefTextInput extends Component {
  constructor(props) {
    super(props);
    this.textInput = null;
    this.inputRef = (ele) => {
      this.textInput = ele;
    };
  }

  componentDidMount() {
    console.log(this.textInput);
  }
  render() {
    return (
      <div className="my-3">
        <h2>Call Back Ref Input</h2>
        <input
          type="text"
          className="border border-gray-500"
          ref={this.inputRef}
        />
      </div>
    );
  }
}
