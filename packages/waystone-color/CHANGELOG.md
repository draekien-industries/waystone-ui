# @waystone/color

## 8.1.1

### Patch Changes

- 7086019: Update dependencies

## 8.1.0

### Minor Changes

- 5c43357: Switch to pnpm and implement minimal syntax highlighter

## 8.0.0

### Major Changes

- 4dcbaa8: Rework of color system

  The new colorscale unifies the way colors are used to a scale starting from `50`
  and ending at `950`.

  To migrate to the new color system, replace any usages of the `*-000` colors
  with a reference to `*-50`.

### Patch Changes

- 4dcbaa8: Constrain range of offsets for color generation
- 9a4fb80: Update dependencies
