<template>
  <button class="bg-blue-500 p-2 rounded-md text-white text-sm hover:bg-blue-600" :type="type" style="width: 90px; border-radius: 4px;">
    <slot/>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'button',
    },
  }
}
</script>
