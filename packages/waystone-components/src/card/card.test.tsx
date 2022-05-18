import React from 'react';
import path from 'path';
import { render } from '../common';
import { Card } from './card';
import { CoverImageCssOptions } from './card.styles';

describe('The Card component', () => {
  it('Matches snapshot', () => {
    const { container } = render(<Card>card</Card>);

    expect(container).toMatchSnapshot();
  });

  it('Renders the cover image', () => {
    const coverImage: CoverImageCssOptions = {
      url: path.basename('./public/example-image.png'),
    };
    const { container } = render(<Card coverImage={coverImage}>card</Card>);

    expect(container).toMatchSnapshot();
  });
});
