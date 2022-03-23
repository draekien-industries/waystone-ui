/** @internal */
export const textCss = ({ inline, variant, color, }) => {
    const css = {
        display: 'block',
        variant: `text.${variant}`,
        color: color || 'inherit',
    };
    if (inline) {
        css.display = 'inline-block';
    }
    return css;
};
