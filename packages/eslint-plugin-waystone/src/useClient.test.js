'use strict';

const { RuleTester } = require('eslint');
const useClientRule = require('./useClient');

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  settings: {
    react: {
      version: '18.2.0',
    },
  },
});

const rule = useClientRule;

describe('use client', () => {
  describe('browser globals', () => {
    ruleTester.run('BROWSER GLOBALS', rule, {
      valid: [
        {
          code: 'const foo = "bar"',
        },
        {
          code: `import {createContext, useContext, useEffect} from 'react';
    const context = createContext()
    export function useTheme() {
      const context = useContext(context);
      useEffect(() => {
        window.setTimeout(() => {});
      });
      return context;
    }`,
        },
        {
          code: `import * as React from 'react';
    const context = React.createContext()
    export function Foo() {
      return <div />;
    }
    export function useTheme() {
      const context = React.useContext(context);
      React.useEffect(() => {
        window.setTimeout(() => {});
      });
      return context;
    }`,
        },
      ],
      invalid: [
        // DOCUMENT
        {
          code: `const foo = "bar";
document.addEventListener('scroll', () => {})`,
          errors: [{ messageId: 'addUseClientBrowserApi' }],
          output: `'use client';

const foo = "bar";
document.addEventListener('scroll', () => {})`,
        },
        {
          code: `const foo = "bar";
function Bar() {
  document.addEventListener('scroll', () => {})
  return <div />;
}`,
          errors: [{ messageId: 'addUseClientBrowserApi' }],
          output: `'use client';

const foo = "bar";
function Bar() {
  document.addEventListener('scroll', () => {})
  return <div />;
}`,
        },
        // WINDOW
        {
          code: `const foo = "bar";
window.addEventListener('scroll', () => {})`,
          errors: [{ messageId: 'addUseClientBrowserApi' }],
          output: `'use client';

const foo = "bar";
window.addEventListener('scroll', () => {})`,
        },
        {
          code: `const foo = "bar";
function Bar() {
  window.addEventListener('scroll', () => {})
  return <div />;
}`,
          errors: [{ messageId: 'addUseClientBrowserApi' }],
          output: `'use client';

const foo = "bar";
function Bar() {
  window.addEventListener('scroll', () => {})
  return <div />;
}`,
        },
        // OBSERVERS
        {
          code: `const observer = new IntersectionObserver()`,
          errors: [{ messageId: 'addUseClientBrowserApi' }],
          output: `'use client';

const observer = new IntersectionObserver()`,
        },
        {
          code: `const observer = new MutationObserver()`,
          errors: [{ messageId: 'addUseClientBrowserApi' }],
          output: `'use client';

const observer = new MutationObserver()`,
        },
        {
          code: `const observer = new ResizeObserver()`,
          errors: [{ messageId: 'addUseClientBrowserApi' }],
          output: `'use client';

const observer = new ResizeObserver()`,
        },
        // GLOBAL PROPERTY REFERENCE
        {
          code: `const foo = window.foo;`,
          errors: [{ messageId: 'addUseClientBrowserApi' }],
          output: `'use client';

const foo = window.foo;`,
        },
      ],
    });
  });

  describe('hooks', () => {
    ruleTester.run('HOOKS', rule, {
      valid: [
        {
          code: 'const foo = "bar";',
        },
        {
          code: `'use client';
import {useState} from 'react';
const Button = () => {
  const [value, setValue] = useState('');
  return <div />;
}`,
        },
        {
          code: `'use client';
import {useEffect} from 'react';
const Button = () => {
  useEffect(() => {}, [])
  return <div />;
}`,
        },
      ],
      invalid: [
        {
          code: `import {useState} from 'react';
const Button = () => {
  const [value, setValue] = useState('');
  return <div />;
}`,
          errors: [
            { messageId: 'addUseClientHooks', data: { hook: 'useState' } },
          ],
          output: `'use client';

import {useState} from 'react';
const Button = () => {
  const [value, setValue] = useState('');
  return <div />;
}`,
        },
        {
          code: `import * as React from 'react';
const Button = () => {
  const [value, setValue] = React.useState('');
  return <div />;
}`,
          errors: [
            { messageId: 'addUseClientHooks', data: { hook: 'useState' } },
          ],
          output: `'use client';

import * as React from 'react';
const Button = () => {
  const [value, setValue] = React.useState('');
  return <div />;
}`,
        },
        {
          code: `import {useEffect} from 'react';
const Button = () => {
  useEffect(() => {}, [])
  return <div />;
}`,
          errors: [
            { messageId: 'addUseClientHooks', data: { hook: 'useEffect' } },
          ],
          output: `'use client';

import {useEffect} from 'react';
const Button = () => {
  useEffect(() => {}, [])
  return <div />;
}`,
        },
      ],
    });
  });

  describe('event callbacks', () => {
    ruleTester.run('EVENT CALLBACKS', rule, {
      valid: [{ code: 'const foo = "bar";' }],
      invalid: [
        {
          code: `import React from 'react';
function App() {
  return (
    <button onClick={() => console.log('hello')}>Hello</button>
  );
}`,
          errors: [{ messageId: 'addUseClientCallbacks' }],
          filename: 'foo.jsx',
          output: `'use client';

import React from 'react';
function App() {
  return (
    <button onClick={() => console.log('hello')}>Hello</button>
  );
}`,
        },
      ],
    });
  });

  describe('CLASS COMPONENTS', () => {
    ruleTester.run('class components', rule, {
      valid: [
        {
          code: `'use client';

import React, {Component} from 'react';

class Foo extends Component {
  render() {
    return <div />
  }
}`,
        },
      ],
      invalid: [
        {
          code: `import React, {Component} from 'react';

class Foo extends Component {
  render() {
    return <div />
  }
}`,
          errors: [{ messageId: 'addUseClientClassComponent' }],
          output: `'use client';

import React, {Component} from 'react';

class Foo extends Component {
  render() {
    return <div />
  }
}`,
        },
      ],
    });
  });

  describe('behaviors', () => {
    describe('comments at the top of the file', () => {
      ruleTester.run('comments', rule, {
        valid: [
          {
            code: `//top level comment
'use client';
import React from 'react';
function App() {
  const foo = React.useState();
  return (
    <button onClick={() => console.log('hello')}>Hello</button>
  );
}`,
          },
        ],
        invalid: [
          {
            code: `//top level comment
import React from 'react';
function App() {
  const foo = React.useState();
  return (
    <button onClick={() => console.log('hello')}>Hello</button>
  );
}`,
            errors: [
              { messageId: 'addUseClientHooks', data: { hook: 'useState' } },
            ],
            output: `//top level comment

'use client';

import React from 'react';
function App() {
  const foo = React.useState();
  return (
    <button onClick={() => console.log('hello')}>Hello</button>
  );
}`,
          },
        ],
      });
    });
  });
});
