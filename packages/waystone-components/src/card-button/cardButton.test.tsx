'use client';

import { fireEvent, render, screen } from '@waystone/testing-library';
import { CardButton } from './cardButton';

describe('TThe CardButton component', () => {
  it('Matches snapshot', () => {
    const { container } = render(<CardButton>card</CardButton>);

    expect(container).toMatchSnapshot();
  });

  it('Invokes the onClick callback when clicked', async () => {
    const handleClick = jest.fn();

    render(<CardButton onClick={handleClick}>card</CardButton>);

    const button = await screen.findByText('card');

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
