import { ComponentWithClassName } from "../component-with-class-name";
import "./screen-column-layout.css";

export class ScreenColumnLayout extends ComponentWithClassName {
  protected readonly className = "screen-layout-column";
}

export class ScreenColumnLayoutMainColumn extends ComponentWithClassName {
  protected readonly className = "screen-layout-column-main-column";
}

export class ScreenColumnLayoutMainColumnHeader extends ComponentWithClassName {
  protected readonly className = "screen-layout-column-main-column-header";
}

export class ScreenColumnLayoutMainColumnFooter extends ComponentWithClassName {
  protected readonly className = "screen-layout-column-main-column-footer";
}

export class ScreenColumnLayoutMainColumnContent extends ComponentWithClassName {
  protected readonly className = "screen-layout-column-main-column-content";
}

export class ScreenColumnLayoutCentralContent extends ComponentWithClassName {
  protected readonly className = "screen-layout-column-central-content";
}
