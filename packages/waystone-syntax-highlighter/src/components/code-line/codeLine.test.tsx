import { render } from '@waystone/testing-library';
import { CodeLine } from './codeLine';
import { githubDark } from '../../lib/styles';
import { Node } from '../../lib';

describe('Components: CodeLine', () => {
  it('matches snapshot', () => {
    const node: Node = {
      type: 'element',
      tagName: 'span',
      properties: {
        className: ['re code'],
      },
      children: [
        {
          type: 'text',
          value: 'text value',
        },
      ],
    };

    const { container } = render(
      <CodeLine node={node} stylesheet={githubDark} />
    );

    expect(container).toMatchSnapshot();
  });
});
