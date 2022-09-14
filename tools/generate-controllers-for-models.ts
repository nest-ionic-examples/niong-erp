import * as fs from 'fs';
import * as path from 'path';
import { capitalCase, paramCase, pascalCase } from 'change-case';
import pluralize = require('pluralize');

(() => {
  const modelsDirectory = '../apps/api/src/app/models';
  const controllersDirectory = '../apps/api/src/app/controllers';
  const files = fs.readdirSync(modelsDirectory);
  files.forEach(file => {
    if (file === 'models.module.ts') return;

    let originalName = file.replace('.ts', '');
    const modelName = pascalCase(originalName);
    const pluralizedName = pluralize(originalName)
    const controllerPath = paramCase(pluralizedName);

    const content = `import { Controller } from '@nestjs/common';
import { ReadController } from '../base-controllers/read.controller';
import { InjectModel } from '@nestjs/mongoose';
import { ${modelName} } from '../models/${originalName}';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('${capitalCase(pluralizedName)}')
@Controller('${controllerPath}')
export class ${pascalCase(pluralizedName)}Controller extends ReadController<${modelName}> {
  constructor(@InjectModel(${modelName}.name) model) { super(model); }
}
`;

    const newFile = controllerPath + '.controller.ts';
    fs.writeFileSync(path.join(controllersDirectory, newFile), content);
  })
})()
