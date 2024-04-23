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
    // console.log(this.textInput);
    // this.textInput.focus();
    // this.textInput.value = "Hi Akbar";
  }
  render() {
    return (
      <div className="my-3">
        <h2>Call Back Ref Input</h2>
        <input
          type="text"
          className="border border-gray-500 py-2 px-2"
          ref={this.props.inputRef}
        />
      </div>
    );
  }
}
