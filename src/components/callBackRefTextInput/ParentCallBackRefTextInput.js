import { Component } from "react";
import CallBackRefTextInput from "./CallBackRefTextInput";

export default class ParentCallBackRefTextInput extends Component {
  constructor(props) {
    super(props);
    this.textInput = null;
  }
  componentDidMount() {
    this.textInput.focus();
    this.textInput.value = "Hi Akbar From Parent Comp";
  }
  render() {
    return (
      <div>
        <CallBackRefTextInput inputRef={(ele) => (this.textInput = ele)} />
      </div>
    );
  }
}
