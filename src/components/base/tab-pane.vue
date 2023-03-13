<template>
  <!--  -->
  <div class="pane-cover" v-show="isActive">
    <slot></slot>
  </div>
</template>

<script>
import { inject, computed, defineComponent, defineEmits, reactive, getCurrentInstance, defineProps } from "vue";

export default {
  inject: ['currentName'],
  name: 'SummerTabPane',
  props: {
    name: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    }
  },
  computed: {
    isActive() {
      return this.name === this.currentName.value
    }
  },
}

</script>
<style lang="less" scoped></style>