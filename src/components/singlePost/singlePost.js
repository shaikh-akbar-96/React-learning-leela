import { Component } from "react";

class SinglePost extends Component {
  constructor(props) {
    super(props);
    console.log("[singlePost.js] constructor called");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("[singlePost.js] getDerivedState called");
    return state;
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[singlePost] should component update");
    return true;
  }
  render() {
    console.log("[singlePost.js] render Called");
    return (
      <div className="border border-gray-200 shadow m-2 p-2">
        <div className="text-xl font-bold text-blue-600">
          {this.props.title}
        </div>
        <div>{this.props.description}</div>
        <div className="my-2">
          <input
            type="text"
            value={this.props.title}
            onChange={this.props.titlechange}
            className="px-5 py-1 rounded-xl border border-gray-500"
          />
        </div>
      </div>
    );
  }
  getSnapshotBeforeUpdate(prevProps, prevstate) {
    console.log("[singlePost] getSnapshotFired");
    return null;
  }
  componentDidUpdate(prevProps, prevstate, snapshot) {
    console.log("[singlePost] component did update");
  }
  componentDidMount() {
    console.log("[singlePost.js] componentDid Mount called");
  }
  componentWillUnmount() {
    console.log("[singlePost.js] component will unmount");
  }
}

export default SinglePost;
