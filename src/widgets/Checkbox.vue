<template>
  <label :class="css">
    <input
      type="checkbox"
      :id="field.id"
      :checked="modelValue"
      @input="onChange"
      :name="field.name"
    />
    {{ field.title }}
  </label>
</template>

<script>
export default {
  props: {
    modelValue: null,
    field: Object,
  },
  emits: ['update:modelValue'],
  computed: {
    mixed() {
      return this.modelValue === 'mixed'
    },
    css() {
      const { mixed } = this
      const { disabled } = this.field
      return [
        this.field.ui.css,
        'ur-checkbox -' + this.icon,
        { '-mixed': mixed, '-disabled': disabled },
      ]
    },
    icon() {
      if (this.mixed) {
        return 'indeterminate'
      }
      return this.modelValue ? 'checked' : 'unchecked'
    },
  },
  methods: {
    onChange() {
      if (this.field.disabled) {
        return
      }
      this.$emit('update:modelValue', !this.modelValue)
    },
  },
}
</script>
