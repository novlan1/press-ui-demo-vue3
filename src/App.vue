<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app';
import { setLang } from './utils/i18n/i18n';

onLaunch(() => {
  console.log('App Launch');
  setLang();
});
onShow(() => {
  console.log('App Show');
});
onHide(() => {
  console.log('App Hide');
});
</script>

<style lang="scss" src="src/utils/style/demo.scss"></style>
