import { Component } from "react";

class AddPost extends Component {
  state = {
    title: "",
    description: "",
    status: "",
  };
  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  changeHandler(title, e) {
    this.setState({
      [title]: e.target.value,
    });
  }
  render() {
    return (
      <div>
        <h2 className="text-2xl font-bold">Add Post</h2>
        <form onSubmit={this.submitHandler}>
          <div className="my-3">
            <label className="block">Title</label>
            <input
              type="text"
              onChange={this.changeHandler.bind(this, "title")}
              className="px-3 py-1 block w-1/4 border border-gray-600 focus:outline-none border-red-600"
            />
          </div>
          <div className="my-3">
            <label className="block">Description</label>
            <textarea
              onChange={this.changeHandler.bind(this, "description")}
              className="px-3 py-1 block w-1/4 border border-gray-600 focus:outline-none border-red-600"
            ></textarea>
          </div>
          <div className="my-3">
            <label className="block">Status</label>
            <select
              onChange={this.changeHandler.bind(this, "status")}
              className="px-3 py-1 block w-1/4 border border-gray-600 focus:outline-none border-red-600"
            >
              <option value="active"> Active</option>
              <option value="inactive"> InActive</option>
            </select>
          </div>
          <div className="my-3">
            <button
              type="submit"
              className="bg-indigo-900 text-white px-5 py-2"
            >
              Add Post
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddPost;
