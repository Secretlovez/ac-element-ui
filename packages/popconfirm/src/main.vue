<template>
  <el-popover v-bind="$attrs" v-model="visible" trigger="click">
    <div class="ac-popconfirm">
      <p class="ac-popconfirm__main">
        <i
          v-if="!hideIcon"
          :class="icon"
          class="ac-popconfirm__icon"
          :style="{ color: iconColor }"
        ></i>
        {{ title }}
      </p>
      <div class="ac-popconfirm__action">
        <el-button size="mini" :type="cancelButtonType" @click="cancel">
          {{ displayCancelButtonText }}
        </el-button>
        <el-button size="mini" :type="confirmButtonType" @click="confirm">
          {{ displayConfirmButtonText }}
        </el-button>
      </div>
    </div>
    <slot name="reference" slot="reference"></slot>
  </el-popover>
</template>

<script>
import ElPopover from '@syhr/ac-element-ui/packages/popover';
import ElButton from '@syhr/ac-element-ui/packages/button';
import { t } from '@syhr/ac-element-ui/src/locale';

export default {
  name: 'ElPopconfirm',
  props: {
    title: {
      type: String,
    },
    confirmButtonText: {
      type: String,
    },
    cancelButtonText: {
      type: String,
    },
    confirmButtonType: {
      type: String,
      default: 'primary',
    },
    cancelButtonType: {
      type: String,
      default: 'text',
    },
    icon: {
      type: String,
      default: 'ac-icon-question',
    },
    iconColor: {
      type: String,
      default: '#f90',
    },
    hideIcon: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    ElPopover,
    ElButton,
  },
  data() {
    return {
      visible: false,
    };
  },
  computed: {
    displayConfirmButtonText() {
      return this.confirmButtonText || t('el.popconfirm.confirmButtonText');
    },
    displayCancelButtonText() {
      return this.cancelButtonText || t('el.popconfirm.cancelButtonText');
    },
  },
  methods: {
    confirm() {
      this.visible = false;
      this.$emit('confirm');
    },
    cancel() {
      this.visible = false;
      this.$emit('cancel');
    },
  },
};
</script>
