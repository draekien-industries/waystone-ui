import type {
  BackgroundColorAttributes,
  BoxShadowAttributes,
  DimensionsAttributes,
  HeightAttributes,
  PaddingAttributes,
} from '@waystone/types';
import type { ComponentProps, ReactElement, ReactNode } from 'react';
import { Box } from 'theme-ui';

export type CardImageCss = {
  src?: string;
} & HeightAttributes &
  BackgroundColorAttributes;

export type CardProps = {
  /** The components to render inside the card */
  children?: ReactNode;
  /**
   * The image to render inside the card. Provide css options apply the image src as a CSS background image.
   * Alternatively, provide an `img` component to render.
   */
  image?: CardImageCss | ReactElement<ComponentProps<'img'>>;
} & DimensionsAttributes &
  PaddingAttributes &
  BoxShadowAttributes;

export const Card = ({
  image,
  children,
  boxShadow = 'md',
  ...rest
}: CardProps) => {
  const hasImage = !!image;
  const isImageCss = hasImage && 'backgroundColor' in image;
  const isImageComponent = hasImage && 'props' in image;

  return (
    <Box
      sx={{
        ...rest,
        backgroundColor: 'card',
        borderRadius: 'md',
        boxShadow,
        overflowY: 'auto',
      }}>
      {isImageCss && (
        <Box
          sx={{
            backgroundImage: `url(${image.src})`,
            backgroundColor: image.backgroundColor,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: image.height ?? 'md',
            maxHeight: image.maxHeight,
            minHeight: image.minHeight,
            width: 'full',
          }}
          aria-description="A decorative background image"
          aria-hidden
        />
      )}
      {isImageComponent && image}
      {children}
    </Box>
  );
};
