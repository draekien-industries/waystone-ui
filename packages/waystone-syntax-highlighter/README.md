# @waystone/syntax-highlighter

This library contains a type safe implementation of react-syntax-highter.

## Installation

Install as a part of `@waystone/ui` by following these [installation instructions](../waystone-ui/README.md#installation), or install by running the script `npm i @waystone/syntax-highlighter`

## Usage

```tsx
const MyCode = () => {
  return (
    <SyntaxHighlighter language="javascript" style="stackoverflowDark">
      "console.log('Hello World')"
    </SyntaxHighlighter>
  );
};
```

For all available styles, see [available styles hjjs](./AVAILABLE_STYLES_HLJS.MD)
