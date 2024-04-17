import { Component } from "react";

class SinglePost extends Component {
  render() {
    return (
      <div className="border border-gray-200 shadow m-2 p-2">
        <div className="text-xl font-bold text-blue-600">
          {this.props.title}
        </div>
        <div>{this.props.description}</div>
      </div>
    );
  }
}

export default SinglePost;
