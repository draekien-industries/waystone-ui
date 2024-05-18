import { createInteractiveColumn } from '../createInteractiveColumn';

describe('createInteractiveColumn', () => {
  it('should match snapshot', () => {
    expect(createInteractiveColumn()).toMatchSnapshot();
  });

  it('should use column overrides', () => {
    const column = createInteractiveColumn({
      id: 'custom-id',
      enableGrouping: true,
    });

    expect(column).toMatchSnapshot();
    expect(column.id).toBe('custom-id');
    expect(column.enableGrouping).toBeTruthy();
  });
});
