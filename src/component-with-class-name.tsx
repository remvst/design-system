import React from "react";

export abstract class ComponentWithClassName<
    Props extends
        React.HTMLAttributes<HTMLDivElement> = React.HTMLAttributes<HTMLDivElement>,
> extends React.Component<Props> {
    protected abstract readonly className: string;

    render() {
        const props = { ...this.props } as any;
        props.className = this.className + " " + (this.props.className || "");

        return <div {...props}>{this.props.children}</div>;
    }
}
