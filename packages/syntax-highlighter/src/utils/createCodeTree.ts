import type { SupportedLanguage } from '../lib';
import { lowlight } from '../lib';

export type CreateCodeTreeOptions = {
  code: string;
  language?: SupportedLanguage;
};

export const createCodeTree = ({ code, language }: CreateCodeTreeOptions) =>
  language && lowlight.listLanguages().includes(language)
    ? lowlight.highlight(language, code)
    : lowlight.highlightAuto(code);
