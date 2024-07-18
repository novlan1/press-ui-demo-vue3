import path from 'path';
// import requireTransform from 'vite-plugin-require-transform';
import { defineConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
import {
  transformVLazyVitePlugin,
  remToRpxVitePlugin,
  genVersionMpVitePlugin,
  genVersionWebVitePlugin,
} from 'plugin-light/lib/plugin';
import { BUILD_NAME_MAP } from 't-comm/lib/v-console/config';

const CUSTOM_ELEMENTS = [
  'Button',
  'Input',
  'Textarea',
];

const diffPlugins = [];
if (process.env.UNI_PLATFORM !== 'h5') {
  diffPlugins.push(remToRpxVitePlugin());
  diffPlugins.push(genVersionMpVitePlugin());
} else {
  diffPlugins.push(genVersionWebVitePlugin({
    buildName: BUILD_NAME_MAP.build,
    commitName: BUILD_NAME_MAP.commit,
    delay: 0,
  }));
}


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
  //   requireTransform({
  //     fileRegex: /.js|.vue|.json$/,
  //  }),
    transformVLazyVitePlugin(),
    ...diffPlugins,
    uni({
      vueOptions: {
        template: {
          compilerOptions: {
            isCustomElement: tag =>
              // return false;
              CUSTOM_ELEMENTS.includes(tag)
            ,
          },
        },
      },
    }),
  ],
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 5001,
  },
});
