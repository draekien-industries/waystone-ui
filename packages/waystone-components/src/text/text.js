var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "theme-ui/jsx-runtime";
import { Text as ThemeUiText } from 'theme-ui';
import { textCss } from './text.styles';
/**
 * Renders a text component.
 * @returns The text component
 */
export const Text = (_a) => {
    var { children, inline = false, variant = 'body', color } = _a, rest = __rest(_a, ["children", "inline", "variant", "color"]);
    return (_jsx(ThemeUiText, Object.assign({ sx: textCss({ inline, variant, color }) }, rest, { children: children })));
};
