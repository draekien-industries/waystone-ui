---
'@waystone/stories': major
'@waystone/components': major
'@waystone/testing-library': major
'@waystone/theme': major
'@waystone/ui': major
---

Update package structure

Created the `@waystone/ui` package for easier installation and created the `@waystone/testing-library`
package for a preconfigured testing-library render function.

Uninstall your `@waystone/*` packages, and run the command `yarn add @waystone/ui`
to update to the latest version. You will need to update the imports to point
to the new source.
