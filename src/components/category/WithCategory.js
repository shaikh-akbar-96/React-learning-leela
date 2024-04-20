import { Component } from "react";

export function WithCategory(limit) {
  return function (WrappedComponent) {
    return class extends Component {
      constructor(props) {
        super(props);
        this.state = {
          category: ["category1", "category 2", "category3", "category4"],
        };
      }
      render() {
        const category = this.state.category.slice(0, limit);
        return (
          <div>
            <div>Category Title</div>
            <WrappedComponent {...this.props} categories={category} />
          </div>
        );
      }
    };
  };
}
