'use strict';
/*
 * Build javascript passthrough modules for highlight.js languages
 */
import { join, dirname } from 'path';
import { EOL } from 'os';
import { writeFile, readdir } from 'fs';
import { fileURLToPath } from 'url';

const autogenMessage = `//${EOL}// This file has been auto-generated by the 'pnpm generate:lowlight' task${EOL}//${EOL}${EOL}`;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Formats a name for importing
 * @param {string} name
 * @returns
 */
function formatLanguageForImport(name) {
  if (!isNaN(name[0])) {
    return `$${name}`;
  }

  if (name.includes('-')) {
    const capitalized = name.replace(/\-[a-z]/g, (match) =>
      match.toUpperCase()
    );

    return capitalized.replace('-', '');
  }

  return name;
}

function createSupportedLanguagesArray(files) {
  let lines = [autogenMessage];

  const languages = files.map((file) => file.split('.js')[0]);

  for (const language of languages) {
    lines.push(
      `import ${formatLanguageForImport(
        language
      )} from 'highlight.js/lib/languages/${language}';${EOL}`
    );
  }

  lines.push(`import { lowlight } from './core';${EOL}${EOL}`);

  for (const language of languages) {
    lines.push(
      `lowlight.registerLanguage('${language}', ${formatLanguageForImport(
        language
      )});${EOL}`
    );
  }

  lines.push(`${EOL}export { lowlight } from './core'${EOL}`);

  writeFile(
    join(__dirname, `../src/lib/lowlight/all.generated.ts`),
    lines.join(''),
    (err) => {
      if (err) {
        throw err;
      }
    }
  );
}

readdir(
  join(__dirname, '../node_modules/highlight.js/lib/languages'),
  (err, files) => {
    if (err) {
      throw err;
    }

    files = files.filter((file) => !file.endsWith('.js.js'));
    createSupportedLanguagesArray(files);
  }
);
