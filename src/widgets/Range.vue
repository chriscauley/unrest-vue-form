<template>
  <div class="ur-range">
    <input type="range" v-bind="inputAttrs" @input="change" @change="change" :value="modelValue" />
    <div class="ur-range__value">
      {{ modelValue }}
    </div>
  </div>
</template>

<script>
import pick from 'lodash.pick'
export default {
  props: {
    field: Object,
    modelValue: Number,
  },
  emits: ['update:modelValue'],
  computed: {
    inputAttrs() {
      return pick(this.field.ui, ['min', 'max', 'step'])
    },
  },
  methods: {
    change(e) {
      this.$emit('update:modelValue', Number(e.target.value))
    },
  },
}
</script>
