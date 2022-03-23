/** @jsxImportSource theme-ui */
import { FC } from 'react';
import { LinkProps } from 'theme-ui';
/** The props for the anchor component. */
export interface AnchorProps extends LinkProps {
    /**
     * A flag indicating whether the href is an external link.
     * @default false
     */
    external?: boolean;
}
export declare const Anchor: FC<AnchorProps>;
//# sourceMappingURL=anchor.d.ts.map