import { Focusable } from "../focusable";
import "./highlightable-row.css";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    highlighted?: boolean;
}

export class HighlightableRow extends Focusable<Props> {
    protected saneProps(): Props {
        const { highlighted, ...other } = this.props;
        return other;
    }

    protected get className() {
        return (
            "highlightable-row" + (this.props.highlighted ? " highlighted" : "")
        );
    }
}
