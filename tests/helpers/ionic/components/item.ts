import { Ionic$ } from "..";
import { ElementActionOptions } from "../..";
import { IonicComponent } from './component';

export interface TapButtonOptions extends ElementActionOptions {
  /**
   * Whether to scroll the element into view first. Default: true
   */
  scroll?: boolean;
}

export class IonicItem extends IonicComponent {
  constructor(selector: string) {
    super(selector);
  }

  static withTitle(buttonTitle: string): IonicItem {
    return new IonicItem(`ion-item=${buttonTitle}`);
  }

  async tap({ visibilityTimeout = 5000, scroll = true }: TapButtonOptions = {}) {
    const button = await Ionic$.$(this.selector);
    await button.waitForDisplayed({ timeout: visibilityTimeout });
    if (scroll) {
      await button.scrollIntoView();
    }
    await button.click();
  }
}