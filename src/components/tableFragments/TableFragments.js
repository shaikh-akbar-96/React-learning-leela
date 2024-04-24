import { Component } from "react";
import TableColumns from "./TableColumns";

export default class TableFragments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [
        { id: 1, name: "aashu" },
        { id: 2, name: "Akbar" },
        { id: 3, name: "Sonu" },
        { id: 4, name: "Sameer" },
      ],
    };
  }
  render() {
    return (
      <div className="my-5">
        <h2 className="my-2">Table Fragment Data</h2>
        <table>
          <thead>
            <tr>
              <th className="border border-red-500">Id</th>
              <th className="border border-red-500">User</th>
            </tr>
          </thead>
          <tbody>
            {this.state.user.map((user) => {
              return (
                <tr key={user.id}>
                  <TableColumns user={user} />
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
