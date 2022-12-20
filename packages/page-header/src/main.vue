<template>
  <div class="ac-page-header">
    <div class="ac-page-header__left" @click="$emit('back')">
      <i class="ac-icon-back"></i>
      <div class="ac-page-header__title">
        <slot name="title">{{ title }}</slot>
      </div>
    </div>
    <div class="ac-page-header__content">
      <slot name="content">{{ content }}</slot>
    </div>
  </div>
</template>

<script>
import { t } from '@syhr/ac-element-ui/src/locale';
export default {
  name: 'ElPageHeader',

  props: {
    title: {
      type: String,
      default() {
        return t('el.pageHeader.title');
      },
    },
    content: String,
  },
};
</script>
