import * as fs from 'fs';
import { paramCase } from 'change-case';
import * as path from 'path';

(() => {
  let directory = '../apps/api/src/app/models';
  const files = fs.readdirSync(directory);
  files.forEach(file => {
    const newFile = paramCase(file.replace('.ts', '')) + '.ts';
    fs.renameSync(path.join(directory, file), path.join(directory, newFile));
  })
})();
