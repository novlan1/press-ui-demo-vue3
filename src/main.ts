import { createSSRApp } from 'vue';
import App from './App.vue';
import DemoBlock from 'press-ui/press-demo-block/press-demo-block.vue';

import { initDemoI18n } from 'press-ui/locale/demo-lang';
import { initMixin } from './utils/mixin/mixin';

import PressCell from 'press-ui/press-cell/press-cell.vue';
import PressPicker from 'press-ui/press-picker/press-picker.vue';
import PressPopupCell from 'press-ui/press-popup-cell/press-popup-cell.vue';


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
