import path from 'path';
// import requireTransform from 'vite-plugin-require-transform';
import { defineConfig, type Plugin } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';

import { genVersionMpVitePlugin, genVersionWebVitePlugin } from '@plugin-light/vite-plugin-gen-version';
import { remToRpxVitePlugin } from '@plugin-light/vite-plugin-rem-to-rpx';
import { transformVLazyVitePlugin } from '@plugin-light/vite-plugin-transform-v-lazy';
import { BUILD_NAME_MAP } from 't-comm/lib/v-console/config';


const CUSTOM_ELEMENTS = [
  'Button',
  'Input',
  'Textarea',
  'Canvas',
];

const diffPlugins: Array<Plugin> = [];
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
    transformVLazyVitePlugin() as Plugin,
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
  css: {
    preprocessorOptions: {
      scss: {
        // https://sass-lang.com/documentation/breaking-changes/legacy-js-api/
        // https://sass-lang.com/documentation/breaking-changes/import/
        silenceDeprecations: ['import', 'legacy-js-api'],
      },
    },
  },
});
