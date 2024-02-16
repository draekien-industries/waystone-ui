import { VirtualItem } from '@tanstack/react-virtual';

export const getPaddingTop = (virtualRows: VirtualItem[]) =>
  virtualRows.length > 0 ? virtualRows?.[0]?.start || 0 : 0;

export const getPaddingBottom = (
  virtualRows: VirtualItem[],
  totalSize: number
) =>
  virtualRows.length > 0
    ? totalSize - (virtualRows?.[virtualRows.length - 1]?.end || 0)
    : 0;
