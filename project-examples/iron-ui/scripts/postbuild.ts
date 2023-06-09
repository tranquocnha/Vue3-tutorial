/* eslint-disable quotes */

import shell from 'shelljs';
import glob from 'fast-glob';
import path from 'path';

(async () => {
    /**
     * Change directory to root
     */

    const rootDir = path.resolve(__dirname, '..');
    const srcDir = path.resolve(rootDir, 'src');
    const cjsDir = path.resolve(rootDir, 'tmp', 'cjs');
    shell.cd(rootDir);

    /**
     * Copy files to lib
     */

    const cjsFiles = await glob(path.resolve(cjsDir, '**/*.js'));
    cjsFiles.forEach((file) => shell.mv(file, file.replace('tmp/cjs', 'lib')));
    shell.rm('-rf', cjsDir);

    const scssFiles = await glob(path.resolve(srcDir, '**/*.scss'));
    scssFiles.forEach((file) => {
        const destFile = file.replace('src', 'lib');
        const destDir = path.dirname(destFile);

        if (!shell.test('-d', destDir)) {
            shell.mkdir('-p', destDir);
        }

        shell.cp(file, destFile);
    });

    const exampleFiles = await glob(path.resolve(srcDir, '**/examples/*.vue'));
    const storiesFiles = await glob(path.resolve(srcDir, 'stories/**/*.vue'));
    [...storiesFiles, ...exampleFiles].forEach((file) => {
        const destFile = file.replace('src', 'lib').replace('.vue', '.raw.vue');

        shell.cp(file, destFile);
    });

    /**
     * Resolve sourcemaps
     */

    shell.cp('-R', './src', './lib/src');
    shell.exec(
        `bash -c 'find lib -type f -name *.mjs.map -exec perl -i -pe"s/..\\/src/src/g" {} +'`
    );

    /**
     * Remove unnecessary files
     */

    shell.rm(['./lib/main.*']);
    shell.exec('find lib -name index.stories.* -type f -delete');
    shell.exec('find lib -name __storybook__ -type d -exec rm -rf {} +');
    shell.exec('find lib -name __tests__ -type d -exec rm -rf {} +');

    /**
     * Copy dist files
     */

    shell.cp('./dist/inkline.umd.js', './lib/inkline.js');
    shell.cp('./dist/style.css', './lib/inkline.css');
    shell.cp('-R', './src/assets', './lib/assets');

    /**
     * Copy meta files
     */

    shell.cp('./README.md', './lib/README.md');
    shell.cp('./LICENSE', './lib/LICENSE');
})();
