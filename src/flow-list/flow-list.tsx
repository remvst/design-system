import React from "react";
import "./flow-list.css";

export class FlowList extends React.Component<
  React.HTMLAttributes<HTMLDivElement>
> {
  render() {
    return (
      <div className="flow-list" {...this.props}>
        {React.Children.map(this.props.children, (child, i) => {
          return <div key={`child-${i}`}>{child}</div>;
        })}
      </div>
    );
  }
}
