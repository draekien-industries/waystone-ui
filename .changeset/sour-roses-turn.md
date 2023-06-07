---
'@waystone/color': major
'@waystone/components': major
'@waystone/core': major
'@waystone/tsconfig': major
---

Rework of color system

The new colorscale unifies the way colors are used to a scale starting from `50`
and ending at `950`.

To migrate to the new color system, replace any usages of the `*-000` colors
with a reference to `*-50`.
