import { ComponentWithClassName } from "../component-with-class-name";
import "./screen-stack-layout.css";

export class ScreenStackLayout extends ComponentWithClassName {
  protected readonly className = "screen-stack-layout";
}

export class ScreenStackLayoutTop extends ComponentWithClassName {
  protected readonly className = "screen-stack-layout-top";
}

export class ScreenStackLayoutContent extends ComponentWithClassName {
  protected readonly className = "screen-stack-layout-content";
}

export class ScreenStackLayoutBottom extends ComponentWithClassName {
  protected readonly className = "screen-stack-layout-bottom";
}
