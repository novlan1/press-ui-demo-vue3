module.exports = {
  root: true,
  extends: ['eslint-config-light-vue3'],
  globals: {
    getCurrentPages: true,
    uni: true,
    globalThis: true,
    qq: true,
    weex: true,
    plus: true,
  },
  parserOptions: {
    project: 'tsconfig.eslint.json',
    ecmaVersion: 'latest',
    extraFileExtensions: ['.vue'],
  },
  rules: {
    'vue/no-v-text-v-html-on-component': 0,
  },
};
