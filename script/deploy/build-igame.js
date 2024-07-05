const { execSync } = require('child_process');
const ENV_FILE = '.env.local';

function main() {
  require('dotenv').config({ path: ENV_FILE });

  delete process.env.UNI_INPUT_DIR;
  const appDir = process.env.VUE_APP_DIR;

  if (appDir === 'project/press') {
    // execSync(' echo VUE_APP_DIR = project/press-ui-demo > .env.local', {
    //   stdio: 'inherit',
    // });

    execSync('npm run init && npm run build', {
      stdio: 'inherit',
    });
    execSync('mkdir -p dist/press/dist && cp -r dist/build/h5/* dist/press/dist', {
      stdio: 'inherit',
    });
  }
}

main();
