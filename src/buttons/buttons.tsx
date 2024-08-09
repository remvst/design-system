import React, { JSX } from "react";
import { Focusable } from "../focusable";
import "./buttons.css";

export class MainButton extends Focusable {
    protected readonly className = "main-button";

    protected renderChildren(): JSX.Element {
        return <span>{super.renderChildren()}</span>;
    }
}
