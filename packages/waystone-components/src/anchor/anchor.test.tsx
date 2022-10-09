import React from 'react';
import { screen, render } from '../common';
import { Anchor } from './anchor';

describe('The Anchor component', () => {
  it('Matches snapshot', () => {
    const { container } = render(<Anchor href="#">anchor</Anchor>);

    expect(container).toMatchSnapshot();
  });

  it('renders as internal when the external prop is false', () => {
    render(<Anchor href="#">internal</Anchor>);

    const component = screen.getByText('internal');

    expect(component.getAttribute('rel')).toBeFalsy();
  });

  it('renders as external when the external prop is true', () => {
    render(
      <Anchor href="#" external>
        internal
      </Anchor>
    );

    const component = screen.getByText('internal');

    expect(component.getAttribute('rel')).toBe('noopener noreferrer');
    expect(component.getAttribute('target')).toBe('_blank');
  });

  it('renders an icon when the external prop is true', () => {
    render(
      <Anchor href="#" external>
        internal
      </Anchor>
    );

    const icon = screen.getByText('open_in_new');

    expect(icon).toBeTruthy();
  });

  it('passes through the target prop when external is true', () => {
    render(
      <Anchor href="#" target="_parent" external>
        internal
      </Anchor>
    );

    const component = screen.getByText('internal');
    expect(component.getAttribute('target')).toBe('_parent');
  });

  it('passes through the rel prop when external is true', () => {
    render(
      <Anchor href="#" rel="noreferrer" external>
        internal
      </Anchor>
    );

    const component = screen.getByText('internal');
    expect(component.getAttribute('rel')).toBe('noreferrer');
  });

  it('renders with no underline when noDecoration is true', () => {
    render(
      <Anchor href="#" noDecoration>
        internal
      </Anchor>
    );

    const component = screen.getByText('internal');

    expect(component).toHaveStyle({ 'padding-bottom': '' });
  });
});
