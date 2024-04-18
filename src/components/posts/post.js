import { Component } from "react";
import SinglePost from "../singlePost/singlePost";
import AddPost from "../addPost/AddPost";
import Dialogue from "../dialogue/dialogue";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        { id: "1", title: "post 1", description: "post 1 description" },
        // { id: "2", title: "post 2", description: "post 2 description" },
        // { id: "3", title: "post 3", description: "post 3 description" },
      ],
      postTitle: "Post List",
      showPost: true,
    };
    console.log("[post.js] costructor called");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("[post.js] getDerived called");
    return state;
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[post.js] should component update");
    return true;
  }
  componentDidMount() {
    console.log("componentDidMount called");
  }
  // state = {
  //   posts: [
  //     { id: "1", title: "post 1", description: "post 1 description" },
  //     { id: "2", title: "post 2", description: "post 2 description" },
  //     { id: "3", title: "post 3", description: "post 3 description" },
  //   ],
  //   postTitle: "Post List",
  //   showPost: true,
  // };

  togglePostHandler = () => {
    this.setState({
      showPost: !this.state.showPost,
    });
  };

  onChangeTitleHandler = (id, e) => {
    console.log(e);
    console.log(id);
    const postIndex = this.state.posts.findIndex((post) => post.id === id);
    const posts = [...this.state.posts];
    posts[postIndex].title = e.target.value;
    this.setState({
      posts,
    });
  };
  render() {
    console.log("[post.js] render called");
    return (
      <div>
        <h2 className="text-2xl my-3">{this.state.postTitle}</h2>

        <div className="flex">
          <button
            onClick={this.togglePostHandler}
            className="px-5 py-3 bg-red-500 text-white"
          >
            {this.state.showPost ? "Hide Post" : "Show Post"}
          </button>
        </div>
        <hr />
        {this.state.showPost && (
          <div className="flex">
            {this.state.posts.map((post) => {
              return (
                <SinglePost
                  key={post.id}
                  title={post.title}
                  description={post.description}
                  titlechange={this.onChangeTitleHandler.bind(this, post.id)}
                />
              );
            })}
          </div>
        )}
        <div className="flex">
          <div className="my-5 flex-1 w-full">
            <AddPost />
          </div>
          <div className="flex-1">
            <Dialogue>
              <div>This is my dialogue data</div>
            </Dialogue>
          </div>
        </div>
      </div>
    );
  }
  getSnapshotBeforeUpdate(prevProps, prevstate) {
    console.log("[post.js] getsnap shot fired");
    return null;
  }
  componentDidUpdate(prevProps, prevstate, snapshot) {
    console.log("[post.js] component update fired");
  }
}
export default Post;
