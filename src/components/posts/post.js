import { Component } from "react";
import SinglePost from "../singlePost/singlePost";


class Post extends Component {
  state = {
    posts: [
      { id: "1", title: "post 1", description: "post 1 description" },
      { id: "2", title: "post 2", description: "post 2 description" },
      { id: "3", title: "post 3", description: "post 3 description" },
    ],
    postTitle: "Post List",
    showPost: true,
  };

  // updateHandler(e) {
  //   e.preventDefault();

  //   this.setState({
  //     postTitle: "Modified Title using function",
  //   });
  // }

  // updateHandlerViaProperty = (e) => {
  //   e.preventDefault();
  //   this.setState({
  //     postTitle: "Modified Title Via Property Method",
  //   });
  // };
  togglePostHandler = () => {
    this.setState({
      showPost: !this.state.showPost,
    });
  };
  render() {
    // setTimeout(() => {
    //   //   console.log("modifying");
    //   const posts = [...this.state.posts];
    //   posts[0].title = "Modiefied Post 1 Data";
    //   posts[1].title = "Modiefied Post 2 Data";
    //   this.setState(posts);
    //   this.setState({ postTitle: "Modified Post title" });
    // }, 3000);

    return (
      <div>
        <h2 className="text-2xl my-3">{this.state.postTitle}</h2>

        <div className="flex">
          {/* <a
            href="https://www.google.com"
            onClick={this.updateHandler.bind(this)}
            className="flex px-5 py-2 bg-red-500 rounded-3xl text-white w-100"
          >
            Update Post Title
          </a>
          <a
            href="https://www.google.com"
            onClick={this.updateHandlerViaProperty}
            className="flex px-5 py-2 bg-red-500 rounded-3xl text-white w-100"
          >
            Update Post Title
          </a> */}
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
                />
              );
            })}
          </div>
        )}
      </div>
    );
  }
}
export default Post;
