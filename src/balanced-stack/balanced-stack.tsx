import React from "react";
import "./balanced-stack.css";

export class BalancedStack extends React.Component<
  React.HTMLAttributes<HTMLDivElement>
> {
  render() {
    return (
      <div className="balanced-stack">
        {React.Children.map(this.props.children, (child, i) => {
          return <div key={`child-${i}`}>{child}</div>;
        })}
      </div>
    );
  }
}
