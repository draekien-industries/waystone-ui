'use client';

import { fireEvent, render, screen } from '@waystone/testing-library';
import { ButtonGroup } from './buttonGroup';

describe('The ButtonGroup component', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <ButtonGroup
        buttons={[
          { id: 'button1', children: 'button1' },
          { id: 'button2', children: 'button2' },
        ]}
      />
    );

    expect(container).toMatchSnapshot();
  });

  it('should throw an error when no ids are provided for buttons', () => {
    jest.spyOn(console, 'error').mockImplementation(jest.fn());

    expect(() =>
      render(
        <ButtonGroup
          buttons={[
            {
              children: 'button',
            },
          ]}
        />
      )
    ).toThrow('You must provide an `id` for each button');
  });

  it('invokes `onChange` when a button is clicked', () => {
    const handleChange = jest.fn();
    render(
      <ButtonGroup
        buttons={[
          { id: 'button1', children: 'button1' },
          { id: 'button2', children: 'button2' },
        ]}
        onChange={handleChange}
      />
    );

    const button1 = screen.getByText('button1');

    fireEvent.click(button1);

    expect(handleChange).toHaveBeenCalled();
  });

  it('renders the correct active button', () => {
    render(
      <ButtonGroup
        buttons={[{ id: 'button1', children: 'button1' }]}
        activeButton="button1"
      />
    );

    const button1 = screen.getByRole('button');

    expect(button1).toHaveStyle({
      outlineStyle: 'solid',
    });
  });
});
