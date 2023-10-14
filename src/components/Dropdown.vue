<script setup lang="ts">
import {ref} from 'vue';

const props = defineProps<{
  options: Array<string>,
  selectedValue: string
}>()

const emit = defineEmits<{
  select: [value: string]
}>()

const displayItems = ref<boolean>(false);

const onClick = () => {
  displayItems.value = !displayItems.value;
}

const onClickItem = (value: string) => {
  emit('select', value);
  displayItems.value = false;
}
</script>

<template>
  <div>
    <button @click="onClick" class="dropdown">{{ selectedValue }}</button>
    <div v-if="displayItems" class="items">
      <div v-for="option in options" @click="onClickItem(option)" :key="option" class="item">
        {{ option }}
      </div>
    </div>
  </div>
</template>

<style scoped>


.dropdown {
  position: relative;
  width: min(20rem, 100%);
  padding: 10px;
}

.items {
  position: absolute;
  width: min(20rem, 100%);
  background-color: gainsboro;
  margin-top: 2px;
  border: 1px solid black;
  border-radius: 4px;
  cursor: pointer;
  padding: 2px;
}

.item {
  padding: 8px;
} 
.item:hover {
  background-color: ghostwhite;
}
</style>
