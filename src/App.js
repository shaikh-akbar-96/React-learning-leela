import "./App.css";
// import Category from "./components/category/Category";
// import Button from "./components/button/Button";
import Post from "./components/posts/Post";
import RefTextInput from "./components/refTextInput/refTextInput";
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
          {/* <Category name="category" /> */}
          <RefTextInput />
        </div>
        <div>
          <Post />
        </div>
      </div>
    </div>
  );
}

export default App;
