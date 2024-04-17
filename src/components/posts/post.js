import { Component } from "react";
import SinglePost from "../singlePost/singlePost";

class Post extends Component {
  state = {
    posts: [
      { title: "post 1", description: "post 1 description" },
      { title: "post 2", description: "post 2 description" },
    ],
    postTitle: "Post List",
  };
  render() {
    setTimeout(() => {
      //   console.log("modifying");
      const posts = [...this.state.posts];
      posts[0].title = "Modiefied Post 1 Data";
      posts[1].title = "Modiefied Post 2 Data";
      this.setState(posts);
      this.setState({ postTitle: "Modified Post title" });
    }, 3000);
    return (
      <div>
        <h2 className="text-2xl my-3">{this.state.postTitle}</h2>
        <hr />
        <div className="flex">
          <SinglePost
            title={this.state.posts[0].title}
            description={this.state.posts[0].description}
          />
          <SinglePost
            title={this.state.posts[1].title}
            description={this.state.posts[1].description}
          />
        </div>
      </div>
    );
  }
}
export default Post;
