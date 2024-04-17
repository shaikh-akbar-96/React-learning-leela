import "./App.css";
import Button from "./components/button/buttonfunctional";
import Buttonclass from "./components/button/buttonClass";

function App() {
  return (
    <div className="container mx-auto">
      <Button name="First Button" />
      <Button name="Second Button" />
      <Buttonclass text="Hello world good morning" />
    </div>
  );
}

export default App;
