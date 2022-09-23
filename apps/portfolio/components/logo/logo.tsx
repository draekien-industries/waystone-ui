/** @jsxImportSource theme-ui */
import { SizeExtended, ThemeColor, colors, styles } from '@waystone/core';

export interface LogoProps {
  size?: SizeExtended | string;
  color?: ThemeColor;
}

export const Logo = ({ size = 'sm', color = 'primary' }: LogoProps) => {
  const dimensions = Object.keys(styles.sizes).includes(size)
    ? styles.sizes[size as SizeExtended]
    : size;

  return (
    <a
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      href="https://github.com/draekien/portfolio"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={dimensions}
        height={dimensions}
        viewBox="0 0 79.838 54"
      >
        <path
          d="M2055.782,114.819h6.012l23.011,54h-6.112Z"
          transform="translate(-2032.93 -114.819)"
          fill={colors[color]}
        />
        <path
          d="M0,27.771H0V21.239l13.175-7.353L0,6.532V0L24.877,13.886,0,27.771Z"
          transform="translate(54.961 0)"
          fill={colors[color]}
        />
        <path
          d="M2055.782,114.819h6.012l23.011,54h-6.112Z"
          transform="translate(-2055.782 -114.819)"
          fill={colors[color]}
        />
      </svg>
    </a>
  );
};
