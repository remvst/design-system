import { ComponentWithClassName } from "../component-with-class-name";
import "./labels.css";

export class GiantLabel extends ComponentWithClassName {
  readonly className = "label label-giant";
}

export class LargeLabel extends ComponentWithClassName {
  readonly className = "label label-large";
}

export class SmallLabel extends ComponentWithClassName {
  readonly className = "label label-small";
}

export class TinyLabel extends ComponentWithClassName {
  readonly className = "label label-tiny";
}

export class MainTitle extends ComponentWithClassName {
  readonly className = "label main-title";
}

export class TextBlock extends ComponentWithClassName {
  readonly className = "text-block";
}
