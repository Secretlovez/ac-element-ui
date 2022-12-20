<template>
  <li class="ac-timeline-item">
    <div class="ac-timeline-item__tail"></div>

    <div
      v-if="!$slots.dot"
      class="ac-timeline-item__node"
      :class="[
        `ac-timeline-item__node--${size || ''}`,
        `ac-timeline-item__node--${type || ''}`,
      ]"
      :style="{
        backgroundColor: color,
      }"
    >
      <i v-if="icon" class="ac-timeline-item__icon" :class="icon"></i>
    </div>
    <div v-if="$slots.dot" class="ac-timeline-item__dot">
      <slot name="dot"></slot>
    </div>

    <div class="ac-timeline-item__wrapper">
      <div
        v-if="!hideTimestamp && placement === 'top'"
        class="ac-timeline-item__timestamp is-top"
      >
        {{ timestamp }}
      </div>

      <div class="ac-timeline-item__content">
        <slot></slot>
      </div>

      <div
        v-if="!hideTimestamp && placement === 'bottom'"
        class="ac-timeline-item__timestamp is-bottom"
      >
        {{ timestamp }}
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'ElTimelineItem',

  inject: ['timeline'],

  props: {
    timestamp: String,

    hideTimestamp: {
      type: Boolean,
      default: false,
    },

    placement: {
      type: String,
      default: 'bottom',
    },

    type: String,

    color: String,

    size: {
      type: String,
      default: 'normal',
    },

    icon: String,
  },
};
</script>
