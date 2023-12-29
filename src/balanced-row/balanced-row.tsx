import "./balanced-row.css";
import React from "react";

export class BalancedRow extends React.Component<
    React.HTMLAttributes<HTMLDivElement>
> {
    render() {
        return (
            <div className="balanced-row" {...this.props}>
                {React.Children.map(this.props.children, (child, i) => {
                    return <div key={`child-${i}`}>{child}</div>;
                })}
            </div>
        );
    }
}
