import React from "react";
import "./dialog-layout.css";

export function DialogLayout(
    props: React.PropsWithChildren & { isModal?: boolean; isPacked?: boolean },
) {
    const classes = ["dialog-layout"];
    if (props.isModal) classes.push("modal");
    if (props.isPacked) classes.push("packed");
    return <div className={classes.join(" ")}>{props.children}</div>;
}

export function DialogTopBar(props: React.PropsWithChildren) {
    return <div className="dialog-layout-top-bar">{props.children}</div>;
}

export function DialogBottomBar(props: React.PropsWithChildren) {
    return <div className="dialog-layout-bottom-bar">{props.children}</div>;
}

export function DialogTopBarLeft(props: React.PropsWithChildren) {
    return <div className="dialog-layout-top-bar-left">{props.children}</div>;
}

export function DialogTopBarCenter(props: React.PropsWithChildren) {
    return <div className="dialog-layout-top-bar-center">{props.children}</div>;
}

export function DialogTopBarRight(props: React.PropsWithChildren) {
    return <div className="dialog-layout-top-bar-right">{props.children}</div>;
}

export function DialogContent(props: React.PropsWithChildren) {
    return <div className="dialog-layout-content">{props.children}</div>;
}
