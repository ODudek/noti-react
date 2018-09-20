import { withInfo } from "@storybook/addon-info";
import wInfoStyle from "../src/styles.json";

export const wInfo = (text) => withInfo({ inline: true, source: false, styles: wInfoStyle, text });
