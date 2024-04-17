import type { PropsWithChildren } from 'react';

export const Code = ({ children }: PropsWithChildren) => (
  <code
    sx={{
      variant: 'text.mono',
      fontSize: '1em',
      fontWeight: 'medium',
      backgroundColor: 'ghost',
      borderRadius: 'small',
      paddingX: 'extra-small',
      paddingY: 2,
      color: 'code',
    }}>
    {children}
  </code>
);
