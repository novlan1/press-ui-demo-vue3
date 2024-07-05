const path = require('path');
const { readFileSync, writeFileSync } = require('t-comm');
const { initWithPressUI } = require('../../src/press-ui/packages/press-ui/script/watch/init');

const PATH_JSON_PATH = path.resolve(__dirname, '../../src/pages.json');
const PAGE_JSON_PRESS_UI = path.resolve(__dirname, '../../src/press-ui/packages/press-ui/src/pages.json');


const CP_LIST = [
  'pages',
  'packages',
  'utils',
];

function getPressUIPagesJson() {
  const content = readFileSync(PAGE_JSON_PRESS_UI);
  const reg = /subPackages": (\[[\s\S]+\]),\s+"preloadRule/;

  const match = content.match(reg);
  const subPackages = match?.[1] || '[]';

  const list = JSON.parse(subPackages);
  return list;
}

function genPagesJson() {
  const targetPagesJson = require(PATH_JSON_PATH);
  targetPagesJson.subPackages = getPressUIPagesJson();
  // console.log('getPressUIPagesJson', getPressUIPagesJson())

  writeFileSync(PATH_JSON_PATH, targetPagesJson, true);
}

function main() {
  initWithPressUI(CP_LIST);
  genPagesJson();
}


main();
