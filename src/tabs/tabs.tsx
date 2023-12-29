import React from 'react';
import { Focusable } from '../focusable';
import './tabs.css';

export class TabLayout extends React.Component<React.HTMLAttributes<HTMLDivElement>> {
    render() {
        return (
            <div className="tab-layout" {...this.props}>
                {this.props.children}
            </div>
        );
    }
}

interface TabProps extends React.HTMLAttributes<HTMLDivElement> {
    selected?: boolean;
}

export class Tab extends Focusable<TabProps> {
    get className(): string {
        let className = 'tab';
        if (this.props.selected) {
            className += ' selected';
        }
        return className;
    }
}
