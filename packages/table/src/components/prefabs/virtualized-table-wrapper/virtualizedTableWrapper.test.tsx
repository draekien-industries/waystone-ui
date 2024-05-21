import { render, renderHook } from '@waystone/testing-library';
import { useRef } from 'react';
import { VirtualizedTableWrapper } from './virtualizedTableWrapper';

describe('<VirtualizedTableWrapper />', () => {
  it('requires ref', () => {
    const { container } = render(
      // @ts-expect-error ref is required
      <VirtualizedTableWrapper>test</VirtualizedTableWrapper>
    );

    expect(container).toMatchSnapshot();
  });

  it('accepts ref', () => {
    const { result } = renderHook(() => useRef<HTMLDivElement>(null));
    const { container } = render(
      <VirtualizedTableWrapper ref={result.current}>
        test
      </VirtualizedTableWrapper>
    );

    expect(container).toMatchSnapshot();
  });

  it('accepts height', () => {
    const { result } = renderHook(() => useRef<HTMLDivElement>(null));
    const { container } = render(
      <VirtualizedTableWrapper
        ref={result.current}
        height={1000}
        minHeight={500}
        maxHeight={1500}
      >
        test
      </VirtualizedTableWrapper>
    );

    expect(container).toMatchSnapshot();
  });

  it('accepts width', () => {
    const { result } = renderHook(() => useRef<HTMLDivElement>(null));
    const { container } = render(
      <VirtualizedTableWrapper
        ref={result.current}
        width={1000}
        minWidth={500}
        maxWidth={1500}
      >
        test
      </VirtualizedTableWrapper>
    );

    expect(container).toMatchSnapshot();
  });
});
