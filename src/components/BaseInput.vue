<template>
  <div class="clear-both m-10">
    <label class="align-text-bottom">{{ label }}</label>
    <input
      v-bind="$attrs"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="py-4 px-6 rounded-sm border float-right "
    >
  </div>
  
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: ''
    }
  }
}
</script>