<template>
  <div class="demo-wrap">
    <demo-block
      :title="t('basicUsage')"
    >
      <PressTextEllipsis
        :content="t('text')"
      />
    </demo-block>

    <demo-block
      :title="t('expandCollapse')"
      :header-style="headerStyle"
    >
      <PressTextEllipsis
        adjust-string="aa"
        :content="t('text2')"
        :expand-text="t('expandText')"
        :collapse-text="t('collapseText')"
      />
    </demo-block>

    <demo-block
      :title="t('customRows')"
      :header-style="headerStyle"
    >
      <PressTextEllipsis
        rows="3"
        :content="t('text3')"
        :expand-text="t('expandText')"
        :collapse-text="t('collapseText')"
        adjust-string="aaaa"
      />
    </demo-block>

    <demo-block
      :title="t('collapseStart')"
      :header-style="headerStyle"
    >
      <PressTextEllipsis
        rows="1"
        adjust-string="aa"
        :content="t('text3')"
        :expand-text="t('expandText')"
        :collapse-text="t('collapseText')"
        position="start"
      />
    </demo-block>

    <demo-block
      :title="t('collapseMiddle')"
      :header-style="headerStyle"
    >
      <PressTextEllipsis
        rows="2"
        :content="t('text3')"
        adjust-string="aa"
        :expand-text="t('expandText')"
        :collapse-text="t('collapseText')"
        position="middle"
      />
    </demo-block>

    <!-- #ifdef H5 -->
    <demo-block
      :title="t('customAction')"
      :header-style="headerStyle"
    >
      <PressTextEllipsis
        :content="t('text')"
        :use-action-slot="true"
      >
        <template #action="{ expanded }">
          {{ expanded ? t('collapseText') : t('expandText') }}
        </template>
      </PressTextEllipsis>
    </demo-block>
    <!-- #endif -->
  </div>
</template>
<script>
import PressTextEllipsis from 'press-ui/press-text-ellipsis/press-text-ellipsis';


export default {
  i18n: {
    'zh-CN': {
      text: '慢慢来，不要急，生活给你出了难题，可也终有一天会给出答案。',
      text2:
      '似水流年是一个人所有的一切，只有这个东西，才真正归你所有。其余的一切，都是片刻的欢娱和不幸，转眼间就已跑到那似水流年里去了。',
      text3:
      '那一天我二十一岁，在我一生的黄金时代。我有好多奢望。我想爱，想吃，还想在一瞬间变成天上半明半暗的云。后来我才知道，生活就是个缓慢受锤的过程，人一天天老下去，奢望也一天天消失，最后变得像挨了锤的牛一样。可是我过二十一岁生日时没有预见到这一点。我觉得自己会永远生猛下去，什么也锤不了我。',
      expandText: '展开',
      collapseText: '收起',
      expandCollapse: '展开/收起',
      customRows: '自定义展示行数',
      collapsePosition: '自定义省略位置',
      collapseStart: '头部省略',
      collapseMiddle: '中部省略',
      customAction: '自定义操作内容',
    },
    'en-US': {
      text:
      'Take your time and be patient. Life itself will eventually answer all those questions it once raised for you.',
      text2:
      'The fleeting time of one\'s life is everything that belongs to a person. Only this thing truly belongs to you. Everything else is just a momentary pleasure or misfortune, which will soon be gone with the passing of time.',
      text3:
      'That day, I turned twenty-one. In the golden age of my life, I was full of dreams. I wanted to love, to eat, and to instantly transform into one of these clouds, part alight, part darkened. It was only later that I understood life is but a slow, drawn-out process of getting your balls crushed. Day by day, you get older. Day by day, your dreams fade. In the end you are no different from a crushed ox. But I hadn\'t foreseen any of it on my twenty-first birthday. I thought I would be vigorous forever, and that nothing could ever crush me.',
      expandText: 'expand',
      collapseText: 'collapse',
      expandCollapse: 'Expand/Collapse',
      customRows: 'Customize Rows',
      collapsePosition: 'Custom Collapse Position',
      collapseStart: 'Head Area Collapse Position',
      collapseMiddle: 'Middle Area Collapse Position',
      customAction: 'Custom Action',
    },
  },
  components: {
    PressTextEllipsis,
  },
  data() {
    return {
      headerStyle: 'margin-top: 10px;',
    };
  },
  computed: {
  },
  mounted() {
  },
  methods: {

  },
};
</script>
<style scoped lang="scss">
</style>
