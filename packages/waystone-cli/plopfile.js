import { createColorScale } from '@waystone/color';

export default function (plop) {
  plop.setGenerator('color', {
    description: 'A color scale generator',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Please provide a name for your color scale',
      },
      {
        type: 'input',
        name: 'midpoint',
        message: 'Please provide the midpoint color hex code',
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination: `${process.cwd()}`,
        templateFiles: 'plop-templates/color',
        base: 'plop-templates/color',
        transform(fileContents, data) {
          const colors = createColorScale({
            name: data.name,
            midPoint: data.midpoint,
          });

          const json = JSON.stringify(colors, null, 2);

          return fileContents.replace(/colors/g, json);
        },
      },
    ],
  });
}
