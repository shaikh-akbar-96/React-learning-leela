import { Component } from "react";
import CatImg from "./pexels-kmerriman-20787.jpg";
import MouseTracker from "./MouseTracker";

export default class Cat extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <MouseTracker
        render={(mouse) => {
          return (
            <img
              src={CatImg}
              style={{
                width: "200px",
                position: "absolute",
                left: mouse.x,
                top: mouse.y,
              }}
            />
          );
        }}
      />
    );
  }
}
