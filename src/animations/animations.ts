import { CSSProperties } from "react";
import './animations.css';

export class AnimateInSequence {
    delay = 0;
    interval = 0.05;
    animationClassName = 'animate-in';

    next(extraStyle: CSSProperties = {}): React.HTMLAttributes<HTMLElement> {
        const delay = this.delay;
        this.delay += this.interval;

        return {
            'className': this.animationClassName,
            'style': {
                'animationDelay': (delay) + 's',
                ...extraStyle,
            },
        };
    }
}
