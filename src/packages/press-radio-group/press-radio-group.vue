<template>
  <div class="press-radio-group-index">
    <div :class="[utils.bem2('radio-group', [direction])]">
      <slot />
    </div>
  </div>
</template>
<script>

import { defaultOptions, defaultProps } from '../common/component-handler/press-component';
import { PARENT_RADIO_GROUP as PARENT } from '../common/constant/parent-map';
import utils from '../common/utils/utils';
import { ParentMixin } from '../mixins/relation';


export default {
  name: 'PressRadioGroup',
  options: {
    ...defaultOptions,
    styleIsolation: 'shared',
  },
  mixins: [
    ParentMixin(PARENT),
  ],
  field: true,
  props: {
    value: {
      type: [String, Number],
      default: '',
    },
    direction: { type: String, default: '' },
    disabled: {
      type: Boolean,
    },
    ...defaultProps,
  },
  emits: ['input', 'change'],
  data() {
    return {
      utils,
    };
  },
  watch: {
    value: {
      handler() {
        this.updateChildren();
      },
    },
    disabled: {
      handler() {
        this.updateChildren();
      },
    },
  },
  created() {
    this.children = [];
  },
  methods: {
    updateChildren() {
      this.children.forEach(child => child.updateFromParent());
    },
  },
};

</script>
<style scoped lang="scss" src="./css/index.scss">
</style>
