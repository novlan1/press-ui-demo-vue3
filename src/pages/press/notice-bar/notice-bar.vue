<template>
  <div class="demo-wrap">
    <demo-block
      :title="t('basicUsage')"
      :section-style="sectionStyle"
    >
      <PressNoticeBar
        scrollable
        left-icon="volume-o"
        :text="t('text')"
      />
    </demo-block>

    <demo-block
      :title="t('scrollable')"
      :section-style="sectionStyle"
    >
      <!-- 文字较短时，通过设置 scrollable 属性开启滚动播放 -->
      <PressNoticeBar
        scrollable
        :text="t('shortText')"
      />

      <!-- 文字较长时，通过禁用 scrollable 属性关闭滚动播放 -->
      <PressNoticeBar
        :scrollable="false"
        :text="t('text')"
      />
    </demo-block>

    <demo-block
      :title="t('wrapable')"
      :section-style="sectionStyle"
    >
      <PressNoticeBar
        wrapable
        :scrollable="false"
        :text="t('text')"
      />
    </demo-block>

    <demo-block
      :title="t('mode')"
      :section-style="sectionStyle"
    >
      <!-- closeable 模式，在右侧显示关闭按钮 -->
      <PressNoticeBar
        mode="closeable"
        :text="t('shortText')"
        @close="onClose"
      />

      <!-- link 模式，在右侧显示链接箭头 -->
      <PressNoticeBar
        mode="link"
        :text="t('shortText')"
      />
    </demo-block>

    <demo-block
      :title="t('customStyle')"
      :section-style="sectionStyle"
    >
      <PressNoticeBar
        color="#1989fa"
        background="#ecf9ff"
        left-icon="info-o"
        :text="t('shortText')"
      />
    </demo-block>

    <demo-block
      :title="t('customSpeed')"
      :section-style="sectionStyle"
    >
      <PressNoticeBar
        :text="t('shortText')"
        :speed="100"
        scrollable
        left-icon="https://img.yzcdn.cn/public_files/2017/8/10/6af5b7168eed548100d9041f07b7c616.png"
      />
    </demo-block>
  </div>
</template>
<script>
import PressNoticeBar from 'press-ui/press-notice-bar/press-notice-bar.vue';


export default {
  i18n: {
    'zh-CN': {
      text: '在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。',
      mode: '通知栏模式',
      content: '内容',
      wrapable: '多行展示',
      shortText: '技术是开发它的人的共同灵魂。',
      scrollable: '滚动播放',
      customStyle: '自定义样式',
      verticalScroll: '垂直滚动',
      customSpeed: '自定义滚动速率',
    },
    'en-US': {
      text: 'Technology is the common soul of the people who developed it.',
      mode: 'Mode',
      content: 'Content',
      wrapable: 'Wrapable',
      shortText: 'Some short text.',
      customStyle: 'Custom Style',
      scrollable: 'Scrollable',
      verticalScroll: 'Vertical Scroll',
      customSpeed: 'Speed',
    },
  },
  components: {
    PressNoticeBar,
  },
  data() {
    return {
      sectionStyle: 'margin:0;',
    };
  },
  methods: {
    onClose(val) {
      console.log('[onClose] val', val);
    },
  },
};
</script>
<style scoped lang="scss">
</style>
