import React from "react";
import { Dim } from "./dim";
import "./transitioning-dim.css";

export class TransitioningDim extends React.Component<
    React.PropsWithChildren,
    { closing: boolean; animateOutListener(): void }
> {
    constructor(props: React.PropsWithChildren) {
        super(props);
        this.state = {
            closing: false,
            animateOutListener() {},
        };
    }

    animateOut(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.setState({
                closing: true,
                animateOutListener: resolve,
            });

            // Safety in case the animation code suckssss
            setTimeout(resolve, 300);
        });
    }

    render() {
        return (
            <Dim
                onAnimationEnd={this.state.animateOutListener}
                className={this.state.closing ? "closing" : "opening"}
            >
                {this.props.children}
            </Dim>
        );
    }
}
