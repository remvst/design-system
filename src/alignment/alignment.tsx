import './alignment.css';
import { ComponentWithClassName } from '../component-with-class-name';

export class VerticalCenter extends ComponentWithClassName {
    protected readonly className = 'vertical-center';
}

export class HorizontalCenter extends ComponentWithClassName {
    protected readonly className = 'horizontal-center';
}

export class AlignRight extends ComponentWithClassName {
    protected readonly className = 'align-right';
}

export class NarrowColumn extends ComponentWithClassName {
    protected readonly className = 'narrow-column';
}
