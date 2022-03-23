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
import { Link } from 'theme-ui';
import { anchorCss } from './anchor.styles';
/** The internal anchor component */
const InternalAnchor = (_a) => {
    var { children } = _a, rest = __rest(_a, ["children"]);
    return (_jsx(Link, Object.assign({}, rest, { sx: anchorCss }, { children: children })));
};
/** The external anchor component */
const ExternalAnchor = (_a) => {
    var { children, target = '_blank', rel = 'noopener noreferrer' } = _a, rest = __rest(_a, ["children", "target", "rel"]);
    return (_jsx(Link, Object.assign({}, rest, { sx: anchorCss, target: target, rel: rel }, { children: children })));
};
export const Anchor = (_a) => {
    var { external = false } = _a, rest = __rest(_a, ["external"]);
    if (external) {
        return _jsx(ExternalAnchor, Object.assign({}, rest));
    }
    return _jsx(InternalAnchor, Object.assign({}, rest));
};
