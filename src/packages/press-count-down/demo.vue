<template>
  <div class="demo-wrap">
    <demo-block
      :title="t('basicUsage')"
      :section-style="sectionStyle"
    >
      <PressCountDown :time="time" />
    </demo-block>

    <demo-block
      :title="t('customFormat')"
      :section-style="sectionStyle"
    >
      <PressCountDown
        :time="time"
        :format="t('formatWithDay')"
      />
    </demo-block>

    <demo-block
      :title="t('millisecond')"
      :section-style="sectionStyle"
    >
      <PressCountDown
        :time="time"
        millisecond
        format="HH:mm:ss:SSS"
      />
    </demo-block>

    <demo-block
      :title="t('customStyle')"
      :section-style="sectionStyle"
    >
      <PressCountDown
        use-slot
        :time="time"
        @change="onChange"
      >
        <template #default="{ timeData }">
          <span class="item">
            {{ timeData.hours }}
          </span>
          <span class="item">
            {{ timeData.minutes }}
          </span>
          <span class="item">
            {{ timeData.seconds }}
          </span>
        </template>
      </PressCountDown>
    </demo-block>

    <demo-block
      :title="t('manualControl')"
      :section-style="sectionStyle"
    >
      <PressCountDown
        id="controlCountDown"
        ref="controlCountDown"
        millisecond
        :time="3000"
        :auto-start="false"
        format="ss:SSS"
        @finish="finished"
      />
    </demo-block>

    <PressGrid
      clickable
      :column-num="3"
    >
      <PressGridItem
        :text="t('start')"
        icon="play-circle-o"
        @click="start"
      />
      <PressGridItem
        :text="t('pause')"
        icon="pause-circle-o"
        @click="pause"
      />
      <PressGridItem
        :text="t('reset')"
        icon="replay"
        @click="reset"
      />
    </PressGrid>
  </div>
</template>
<script>
import { setData } from 'press-ui/common/component-handler/set-data';
import { selectComponent } from 'press-ui/common/functional-component';

import PressCountDown from 'press-ui/press-count-down/press-count-down.vue';
import PressGridItem from 'press-ui/press-grid-item/press-grid-item.vue';
import PressGrid from 'press-ui/press-grid/press-grid.vue';


export default {
  i18n: {
    'zh-CN': {
      millisecond: '毫秒级渲染',
      customStyle: '自定义样式',
      customFormat: '自定义格式',
      manualControl: '手动控制',
      formatWithDay: 'DD 天 HH 时 mm 分 ss 秒',
      reset: '重置',
      pause: '暂停',
      start: '开始',
      finished: '倒计时结束',
    },
    'en-US': {
      millisecond: 'Millisecond',
      customStyle: 'Custom Style',
      customFormat: 'Custom Format',
      manualControl: 'Manual Control',
      formatWithDay: 'DD Day, HH:mm:ss',
      reset: 'Reset',
      pause: 'Pause',
      start: 'Start',
      finished: 'Finished',
    },
  },

  components: {
    PressCountDown,
    PressGrid,
    PressGridItem,
  },
  data() {
    return {
      time: 30 * 60 * 60 * 1000,
      sectionStyle: 'margin: 0 12px 20px;',
    };
  },
  methods: {
    onChange() {
    },
    start() {
      const countDown = selectComponent(this, '#controlCountDown');
      setData(countDown, null, 'start');
    },

    pause() {
      const countDown = selectComponent(this, '#controlCountDown');
      setData(countDown, null, 'pause');
    },

    reset() {
      const countDown = selectComponent(this, '#controlCountDown');
      setData(countDown, null, 'reset');
    },
    finished() {

    },
  },
};
</script>
<style scoped lang="scss">
.item {
  display: inline-block;
  width: 22px;
  margin-right: 5px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #1989fa;
  border-radius: 2px;
}
</style>
