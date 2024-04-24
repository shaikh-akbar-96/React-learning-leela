import "./App.css";
import MouseTracker from "./components/MouseTracker/MouseTracker";
import MouseWithCat from "./components/MouseTracker/MouseWithCat";
import Cat from "./components/MouseTracker/cat";
import UserPropType from "./components/UserPropType/UserPropType";
import CallBackRefTextInput from "./components/callBackRefTextInput/CallBackRefTextInput";
import ParentCallBackRefTextInput from "./components/callBackRefTextInput/ParentCallBackRefTextInput";
import ParentForwardingRefButton from "./components/forwardingRef/ParentForwardingRefButton";
// import Category from "./components/category/Category";
// import Button from "./components/button/Button";
import Post from "./components/posts/Post";
import ParentRefTextInput from "./components/refTextInput/ParentRefTextInput";
import RefTextInput from "./components/refTextInput/refTextInput";
import TableFragments from "./components/tableFragments/TableFragments";
// import Text from "./components/text/Text";
function App() {
  return (
    <div className="container mx-auto">
      {/* <Cat /> */}
      <UserPropType />
      {/* <Button name="First Button" />
      <Button name="Second Button" />

      <Text text="Hello world good morning" /> */}
      {/* <br /> */}
      {/* <div className="w-4/5"> */}
      {/* <div>
          <TableFragments />
        </div> */}
      {/* <div> */}
      {/* <Category name="category" /> */}
      {/* <ParentForwardingRefButton /> */}
      {/* </div> */}
      {/* <div> */}
      {/* <Category name="category" /> */}
      {/* <ParentRefTextInput /> */}
      {/* </div> */}
      {/* <div>
          <ParentCallBackRefTextInput />
        </div> */}
      {/* <div>
          <Post />
        </div> */}
      {/* </div> */}
    </div>
  );
}

export default App;
