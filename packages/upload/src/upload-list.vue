<template>
  <transition-group
    tag="ul"
    :class="[
      'ac-upload-list',
      'ac-upload-list--' + listType,
      { 'is-disabled': disabled },
    ]"
    name="ac-list"
  >
    <li
      v-for="file in files"
      :class="[
        'ac-upload-list__item',
        'is-' + file.status,
        focusing ? 'focusing' : '',
      ]"
      :key="file.uid"
      tabindex="0"
      @keydown.delete="!disabled && $emit('remove', file)"
      @focus="focusing = true"
      @blur="focusing = false"
      @click="focusing = false"
    >
      <slot :file="file">
        <img
          class="ac-upload-list__item-thumbnail"
          v-if="
            file.status !== 'uploading' &&
              ['picture-card', 'picture'].indexOf(listType) > -1
          "
          :src="file.url"
          alt=""
        />
        <a class="ac-upload-list__item-name" @click="handleClick(file)">
          <i class="ac-icon-document"></i>{{ file.name }}
        </a>
        <label class="ac-upload-list__item-status-label">
          <i
            :class="{
              'ac-icon-upload-success': true,
              'ac-icon-circle-check': listType === 'text',
              'ac-icon-check':
                ['picture-card', 'picture'].indexOf(listType) > -1,
            }"
          ></i>
        </label>
        <i
          class="ac-icon-close"
          v-if="!disabled"
          @click="$emit('remove', file)"
        ></i>
        <i class="ac-icon-close-tip" v-if="!disabled">{{
          t('el.upload.deleteTip')
        }}</i>
        <!--因为close按钮只在li:focus的时候 display, li blur后就不存在了，所以键盘导航时永远无法 focus到 close按钮上-->
        <el-progress
          v-if="file.status === 'uploading'"
          :type="listType === 'picture-card' ? 'circle' : 'line'"
          :stroke-width="listType === 'picture-card' ? 6 : 2"
          :percentage="parsePercentage(file.percentage)"
        >
        </el-progress>
        <span
          class="ac-upload-list__item-actions"
          v-if="listType === 'picture-card'"
        >
          <span
            class="ac-upload-list__item-preview"
            v-if="handlePreview && listType === 'picture-card'"
            @click="handlePreview(file)"
          >
            <i class="ac-icon-zoom-in"></i>
          </span>
          <span
            v-if="!disabled"
            class="ac-upload-list__item-delete"
            @click="$emit('remove', file)"
          >
            <i class="ac-icon-delete"></i>
          </span>
        </span>
      </slot>
    </li>
  </transition-group>
</template>
<script>
import Locale from '@syhr/ac-element-ui/src/mixins/locale';
import ElProgress from '@syhr/ac-element-ui/packages/progress';

export default {
  name: 'ElUploadList',

  mixins: [Locale],

  data() {
    return {
      focusing: false,
    };
  },
  components: { ElProgress },

  props: {
    files: {
      type: Array,
      default() {
        return [];
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    handlePreview: Function,
    listType: String,
  },
  methods: {
    parsePercentage(val) {
      return parseInt(val, 10);
    },
    handleClick(file) {
      this.handlePreview && this.handlePreview(file);
    },
  },
};
</script>
