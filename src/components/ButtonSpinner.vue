<script setup lang="ts">
defineProps<{
  label: string,
  disabled: boolean,
  showSpinner: boolean,
}>()

</script>

<template>
  <button
    :disabled="disabled"
    class="button">
      <div v-if="showSpinner" class="spinner"></div>
      <template v-else>
        {{ label }}
      </template>
  </button>
</template>

<style scoped>
.button {
  padding: 0.5rem;
  background-color: #4287f5;
  color: white;
  font-size: 16px;
  border-radius: 4px;
}

.button:disabled {
  color: black;
  background-color: white;
}

.spinner {
  display: inline-block;
  width: 18px;
  height: 18px;
  border: 3px solid rgba(255,255,255,0);
  border-radius: 50%;
  border-top-color: #fff;
  border-right-color: #fff;
  animation: spin 0.8s infinite linear;
  -webkit-animation: spin 0.8s infinite linear;
}

@keyframes spin {
  to { -webkit-transform: rotate(360deg); }
}
@-webkit-keyframes spin {
  to { -webkit-transform: rotate(360deg); }
}

</style>
