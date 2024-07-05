import { createSSRApp } from 'vue';
import App from './App.vue';
import DemoBlock from './pages/demo-block/demo-block.vue';

import { initDemoI18n } from './utils/i18n/i18n';
import { initMixin } from './utils/mixin/mixin';

import PressCell from './packages/press-cell/press-cell.vue';
import PressPicker from './packages/press-picker/press-picker.vue';
import PressPopupCell from './packages/press-popup-cell/press-popup-cell.vue';


export function createApp() {
  const app = createSSRApp(App);
  initDemoI18n(app);
  initMixin(app);

  // uni-app 下的 Vue3 项目必须在 main.ts 中引入
  app.component('DemoBlock', DemoBlock);

  app.component('PressCell', PressCell);
  app.component('PressPicker', PressPicker);
  app.component('PressPopupCell', PressPopupCell);


  return {
    app,
  };
}
