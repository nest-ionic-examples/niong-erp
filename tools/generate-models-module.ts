import * as fs from 'fs';
import * as path from 'path';
import { camelCase, pascalCase } from 'change-case';

(() => {
  const modelsDirectory = '../apps/api/src/app/models';
  const files = fs.readdirSync(modelsDirectory)
    .filter(file => file !== 'models.module.ts')
    .map(file => file.replace('.ts', ''))

  const content = `import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
${files.map(file => `import { ${pascalCase(file)}, ${camelCase(file)}Schema } from './${file}';`).join('\n')}

const providers = MongooseModule.forFeature([
  ${files.map(file => `{name: ${pascalCase(file)}.name, schema: ${camelCase(file)}Schema},`).join('\n  ')}
]).providers;

@Module({
  providers,
  exports: providers,
})
export class ModelsModule {
}
`;

  fs.writeFileSync(path.join(modelsDirectory, 'models.module.ts'), content);
})()
