import React, { Component } from "react";

export default class RefTextInput extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  focusInput = () => {
    console.log(this.inputRef.current);
    this.inputRef.current.focus();
    this.inputRef.current.value = "Leela Web Dev";
  };
  render() {
    return (
      <div className="my-3">
        <div className="mb-2"> Ref Text Input</div>
        <div className="">
          <input
            type="text"
            ref={this.inputRef}
            className="border border-gray-500"
          />
        </div>
        <div>
          <button
            className="bg-red-500 text-white px-2 py-1 my-2"
            onClick={this.focusInput}
          >
            Focus Input
          </button>
        </div>
      </div>
    );
  }
}
