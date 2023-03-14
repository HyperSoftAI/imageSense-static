<template>
  <div class="summer-tabs">
    <div class="heads">
      <div v-for="tab in tabs" class="item" :key="tab.name" :class="{ 'active': modelValue === tab.name }">
        <div @click="selectTab(tab)">{{ tab.label }}</div>
        <!-- <div class="active-line" :class="{ 'hide': modelValue !== tab.name }"></div> -->
      </div>
      <div class="active-line"></div>
    </div>
    <div class="tab-body">
      <slot></slot>
    </div>
  </div>
</template>
  
<script>


import { defineComponent, computed, provide, defineEmits, reactive, getCurrentInstance, defineProps } from "vue";
// const emit = defineEmits();

export default {
  name: 'SummerTabs',
  setup(props, context) {
    console.log(context, props);
    const defaults = context.slots.default()
    console.log('hahah', defaults);
    const tabs = defaults.map(i => i.props)
    return {
      tabs
    };
  },
  props: {
    modelValue: {
      type: String
    }
  },
  computed: {
    currentName: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit('update:modelValue', value);
      }
    }
  },
  watch: {
    currentName(newValue, oldValue) {
      console.log('currentName', newValue, oldValue);
      this.dealTabPosition(newValue)
    }
  },
  provide() {
    return {
      // 显式提供一个计算属性
      currentName: computed(() => this.currentName)
    }
  },
  created() {
    provide('rootTabs', {
      currentName: this.currentName,
    });

  },
  mounted() {
    this.dealTabPosition(this.currentName)

    window.onresize = () => {
      this.dealTabPosition(this.currentName)
    }
  },

  methods: {
    selectTab(selectedTab) {
      console.log('selectedTab.', selectedTab)
      this.currentName = selectedTab.name;
    },
    dealTabPosition(newCurerntName) {

      const currentIndex = this.tabs.findIndex(i => i.name === newCurerntName)
      const activeLine = this.$el.querySelector('.active-line');
      const mainCover = this.$el.querySelector('.heads');
      const mainCoverWidth = mainCover.offsetWidth; // 总长度
      const everyWidth = mainCoverWidth / this.tabs.length; // 每个长度
      const activelinWidth = activeLine.offsetWidth; // 激活线长度
      const leftLength = everyWidth * (currentIndex + 1) - everyWidth * 0.5 - activelinWidth * 0.5; // 左边长度
      // const activeItem = this.$el.querySelectorAll('.item')[currentIndex];
      // const activeItemWidth = activeItem.offsetWidth;
      // const activeItemLeft = activeItem.offsetLeft;
      // const leftLength = activeItemLeft + activeItemWidth / 2 - 10;
      activeLine.style.transform = `translateX(${leftLength}px)`;
    }
  }
};

</script>

<style lang="less" scoped>
.heads {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 40px;
  // background-color: #FFFFFF;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 14px;
  line-height: 40px;
  margin: 30px 0 50px;
  user-select: none;

  .item {
    position: relative;
    flex: 1;
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    color: rgba(31, 38, 61, 1);

    // @media screen and (max-width: 768px) {
    //   font-size: 14px;
    // }


    div {
      cursor: pointer;
    }

    &.active {
      font-weight: 500;
      color: #377cfd;
    }
  }

  .active-line {
    position: absolute;
    width: 80px;
    height: 2px;
    border-radius: 1px;
    background-color: #377cfd;
    top: 38px;
    left: 0px;
    transform: translateX(0px);
    transition: all 0.3s ease-in-out;

    @media screen and (max-width: 768px) {
      width: 66px;
    }

    &.hide {
      display: none;
    }
  }

}
</style>