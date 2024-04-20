import "./App.css";
// import Button from "./components/button/Button";
import Category from "./components/category/category";
import Post from "./components/posts/post";

// import Text from "./components/text/Text";

function App() {
  return (
    <div className="container mx-auto">
      {/* <Button name="First Button" />
      <Button name="Second Button" />

      <Text text="Hello world good morning" /> */}
      <br />
      <div className="w-4/5">
        <div>
          <Category name="category" />
        </div>
        <div>
          <Post />
        </div>
      </div>
    </div>
  );
}

export default App;
