import { ComponentWithClassName } from '../component-with-class-name';
import './screen-layout.css';

export class ScreenLayout extends ComponentWithClassName {
    protected readonly className = 'screen-layout';
}

export class ScreenTop extends ComponentWithClassName {
    protected readonly className = 'screen-layout-top';
}

export class ScreenContent extends ComponentWithClassName {
    protected readonly className = 'screen-layout-content';
}

export class ScreenBottom extends ComponentWithClassName {
    protected readonly className = 'screen-layout-bottom';
}

export class ScreenLayoutV2 extends ComponentWithClassName {
    protected readonly className = 'screen-layout-v2';
}

export class ScreenMainColumn extends ComponentWithClassName {
    protected readonly className = 'screen-main-column';
}

export class ScreenMainColumnHeader extends ComponentWithClassName {
    protected readonly className = 'screen-main-column-header';
}

export class ScreenMainColumnFooter extends ComponentWithClassName {
    protected readonly className = 'screen-main-column-footer';
}

export class ScreenMainColumnContent extends ComponentWithClassName {
    protected readonly className = 'screen-main-column-content';
}

export class ScreenCentralContent extends ComponentWithClassName {
    protected readonly className = 'screen-central-content';
}
