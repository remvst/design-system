import React from "react";
import "./stack-list.css";

export class StackList extends React.Component<
    React.HTMLAttributes<HTMLDivElement>
> {
    render() {
        return (
            <div className="stack-list" {...this.props}>
                {React.Children.map(this.props.children, (child, i) => {
                    return <div key={`child-${i}`}>{child}</div>;
                })}
            </div>
        );
    }
}
