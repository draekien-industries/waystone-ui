import { jsx as _jsx } from "theme-ui/jsx-runtime";
/** @jsxImportSource theme-ui */
import { useEffect } from 'react';
import { render } from '@testing-library/react';
import { Waystone } from '../';
import { useColorMode } from '@theme-ui/color-modes';
const TestProvider = ({ children }) => (_jsx(Waystone, { children: children }));
const DarkModeWrapper = ({ children }) => {
    const [, setColorMode] = useColorMode();
    useEffect(() => {
        setColorMode('dark');
    }, [setColorMode]);
    return _jsx("div", { children: children });
};
const themedRender = (ui, options) => render(ui, Object.assign({ wrapper: TestProvider }, options));
export * from '@testing-library/react';
export { themedRender as render, DarkModeWrapper };
