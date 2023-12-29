import React from "react";
import "./gauge.css";

interface Props {
  value: number;
  label?: string;
}

export class Gauge extends React.Component<
  Props & React.HTMLAttributes<HTMLDivElement>
> {
  render() {
    return (
      <div className="gauge" {...this.props}>
        <div
          style={{
            width: `${Math.max(0, Math.min(100, this.props.value * 100))}%`,
          }}
        >
          <label>{this.props.label}</label>
        </div>
      </div>
    );
  }
}
