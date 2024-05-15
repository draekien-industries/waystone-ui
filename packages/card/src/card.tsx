import type {
  BackgroundColorAttributes,
  BoxShadowAttributes,
  HeightAttributes,
  PaddingAttributes,
  TestIdAttributes,
  WidthAttributes,
} from '@waystone/types';
import type { ComponentProps, ReactElement, ReactNode } from 'react';
import { Box } from 'theme-ui';

export type CardImageCss = {
  src?: string;
} & HeightAttributes &
  BackgroundColorAttributes;

const isCardImageCss = (
  image: CardImageCss | ReactElement<ComponentProps<'img'>>
): image is CardImageCss => {
  if ('props' in image) return false;
  if ('type' in image) return false;
  if ('key' in image) return false;

  return true;
};

export type CardProps = {
  /** The components to render inside the card */
  children?: ReactNode;
  /**
   * The image to render inside the card. Provide css options apply the image src as a CSS background image.
   * Alternatively, provide an `img` component to render.
   */
  image?: CardImageCss | ReactElement<ComponentProps<'img'>>;
} & WidthAttributes &
  PaddingAttributes &
  BoxShadowAttributes &
  TestIdAttributes;

export const Card = ({
  image,
  children,
  boxShadow = 'medium',
  'data-testid': testId,
  ...rest
}: CardProps) => {
  const hasImage = !!image;
  const isImageCss = hasImage && isCardImageCss(image);
  const isImageComponent = hasImage && !isImageCss;

  return (
    <Box
      sx={{
        ...rest,
        backgroundColor: 'card',
        borderRadius: 'medium',
        boxShadow,
        overflow: 'clip',
      }}
      data-testid={testId}
    >
      {isImageCss && (
        <div
          sx={{
            backgroundImage: `url(${image.src})`,
            backgroundColor: image.backgroundColor,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: image.height ?? 'medium',
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
