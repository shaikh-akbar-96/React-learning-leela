import "./App.css";
import Button from "./components/button/Button";
import Post from "./components/posts/post";

import Text from "./components/text/Text";

function App() {
  return (
    <div className="container mx-auto">
      <Button name="First Button" />
      <Button name="Second Button" />

      <Text text="Hello world good morning" />
      <br />
      <Post />
    </div>
  );
}

export default App;
