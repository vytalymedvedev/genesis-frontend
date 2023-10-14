<script setup lang="ts">
defineProps<{
  label: string,
  disabled: boolean
}>()

</script>

<template>
  <button
    :disabled="disabled"
    class="button">
      {{ label }}
  </button>
</template>

<style scoped>
.button {
  padding: 0.5rem;
  background-color: steelblue;
  color: white;
  font-size: 16px;
  border-radius: 4px;
}

.button:disabled {
  color: black;
  background-color: white;
}
</style>
