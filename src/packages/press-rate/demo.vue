<template>
  <div class="wrap">
    <demo-block :title="t('basicUsage')">
      <PressRate
        :value="3"
        custom-class="press-rate--demo-class"
        @change="onChange"
      />
    </demo-block>

    <demo-block :title="t('customIcon')">
      <PressRate
        :value="value"
        icon="like"
        void-icon="like-o"
        @change="onChange"
      />
    </demo-block>

    <demo-block :title="t('customImage')">
      <PressRate
        :value="value"
        void-icon="https://image-1251917893.file.myqcloud.com/Esports/new/user/star.png"
        icon="https://image-1251917893.file.myqcloud.com/Esports/new/user/sel-star.png"
        @change="onChange"
      />
    </demo-block>

    <demo-block :title="t('customStyle')">
      <PressRate
        :value="value"
        :size="25"
        color="#ffd21e"
        void-icon="star"
        void-color="#eee"
        @change="onChange"
      />
    </demo-block>

    <demo-block :title="t('halfStar')">
      <PressRate
        :value="half"
        allow-half
        void-icon="star"
        void-color="#eee"
        @change="onChange"
      />
    </demo-block>

    <demo-block :title="t('customCount')">
      <PressRate
        :value="value"
        :count="6"
        @change="onChange"
      />
    </demo-block>

    <demo-block :title="t('disabled')">
      <PressRate
        :value="value"
        disabled
        @change="onChange"
      />
    </demo-block>

    <demo-block :title="t('readonly')">
      <PressRate
        :value="value"
        readonly
        @change="onChange"
      />
    </demo-block>
  </div>
</template>
<script>
import PressRate from 'press-ui/press-rate/press-rate.vue';

export default {
  i18n: {
    'zh-CN': {
      halfStar: '半星',
      disabled: '禁用状态',
      customIcon: '自定义图标',
      customImage: '自定义图片',
      customStyle: '自定义样式',
      customCount: '自定义数量',
      readonly: '只读状态',
      changeEvent: '监听 change 事件',
      toastContent: value => `当前值：${value}`,
    },
    'en-US': {
      halfStar: 'Half Star',
      disabled: 'Disabled',
      customImage: 'Custom Image',
      customIcon: 'Custom Icon',
      customStyle: 'Custom Style',
      customCount: 'Custom Count',
      readonly: 'Readonly',
      changeEvent: 'Change Event',
      toastContent: value => `current value：${value}`,
    },
  },

  components: {
    PressRate,
  },
  data() {
    return {
      value: 3,
      half: 2.5,
    };
  },
  methods: {
    onChange(val) {
      this.onGTip(`value: ${val}`);
    },
  },
};
</script>
<style scoped lang="scss">
@import "press-ui/common/style/smoba/mixin.scss";
</style>
