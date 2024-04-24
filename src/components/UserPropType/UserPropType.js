import { Component } from "react";
import UserDetails from "./UserDetails";

export default class UserPropType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [
        {
          id: 1,
          name: "Akbar",
        },
        {
          id: 2,
          name: "Aashu",
        },
        {
          id: 3,
          name: "Arshin",
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <h2 className="font-bold text-xl mb-2">User Prop Type</h2>
        <div className="flex">
          {this.state.user.map((user) => {
            return <UserDetails name={user.name} id={user.id} key={user.id} />;
          })}
        </div>
      </div>
    );
  }
}
