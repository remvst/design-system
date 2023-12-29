import { TinyLabel } from "../labels/labels";
import "./slider.css";
import React from "react";

export default class Slider extends React.Component<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
> {
    render(): React.ReactNode {
        return <input type="range" {...this.props} />;
    }
}

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    label: (value: number) => string;
}

interface State {
    value: number;
}

export class LabelledSlider extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            value: (props.value as number) || 0,
        };
    }

    static percentageLabel(value: number): string {
        return `${Math.round(value * 100)}%`;
    }

    static rawValue(value: number): string {
        return value.toString();
    }

    render(): React.ReactNode {
        const sliderProps = {
            value: this.props.value,
            step: this.props.step,
            min: this.props.min,
            max: this.props.max,
            onChange: (e: any) => {
                this.setState({ value: parseFloat(e.target.value) });
                if (this.props.onChange) {
                    this.props.onChange(e);
                }
            },
        };

        return (
            <div className="labelled-slider">
                <Slider {...sliderProps} />
                <TinyLabel>
                    {this.props.label ? this.props.label(this.state.value) : ""}
                </TinyLabel>
            </div>
        );
    }
}
