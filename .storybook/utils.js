import { withInfo } from "@storybook/addon-info";
import wInfoStyle from "../src/styles.json";

export const wInfo = (text) => withInfo({ inline: false, source: false, styles: wInfoStyle, text });
