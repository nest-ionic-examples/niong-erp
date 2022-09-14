import * as fs from 'fs';
import * as path from 'path';
import { camelCase, pascalCase } from 'change-case';

(() => {
  const controllersDirectory = '../apps/api/src/app/controllers';
  const files = fs.readdirSync(controllersDirectory)
    .filter(file => file !== 'controllers.module.ts')
    .map(file => file.replace('.ts', ''))

  const content = `import { Module } from '@nestjs/common';
import { ModelsModule } from '../models/models.module';
${files.map(file => `import { ${pascalCase(file)} } from './${file}';`).join('\n')}

@Module({
  imports: [ModelsModule],
  controllers: [
    ${files.map(file => `${pascalCase(file)},`).join('\n    ')}
  ],
})
export class ControllersModule {}
`;

  fs.writeFileSync(path.join(controllersDirectory, 'controllers.module.ts'), content);
})()
