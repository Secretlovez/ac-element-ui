import { t } from '@syhr/ac-element-ui/src/locale';

export default {
  methods: {
    t(...args) {
      return t.apply(this, args);
    },
  },
};
