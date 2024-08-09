import React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    disabled?: boolean;
}

export abstract class Focusable<
    PropsType extends Props = Props,
> extends React.Component<PropsType> {
    protected abstract readonly className: string;
    private divElement: HTMLDivElement;

    private onMouseOver() {
        this.divElement?.focus();
    }

    private keyUp(event: React.KeyboardEvent<HTMLDivElement>) {
        if (this.props.disabled) {
            return;
        }

        if (event.key === "Enter" || event.key === " ") {
            this.divElement?.click();
        }
    }

    protected saneProps(): Props {
        return this.props;
    }

    render() {
        const props = { ...this.saneProps() } as any;
        props.className = props.className || "";
        props.className += " " + this.className;
        props.className += " " + (this.props.disabled ? "disabled" : "");

        return (
            <div
                {...props}
                onMouseOver={() => this.onMouseOver()}
                onKeyUp={(e) => this.keyUp(e)}
                ref={(div) => (this.divElement = div)}
            >
                {this.renderChildren()}
            </div>
        );
    }

    protected renderChildren() {
        return <>{this.props.children}</>;
    }
}
