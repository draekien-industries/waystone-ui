import { ThemeUIStyleObject } from 'theme-ui';
import { HasColor, HasVariant } from '../common/interfaces';
/** @internal */
export interface TextCssOptions extends HasVariant, HasColor {
    inline: boolean;
}
/** @internal */
export declare const textCss: (options: TextCssOptions) => ThemeUIStyleObject;
//# sourceMappingURL=text.styles.d.ts.map