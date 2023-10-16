<script setup lang="ts">
import {ref} from 'vue';
import type { IStringKV } from '../interfaces/IStringKV';

defineProps<{
  options: Array<IStringKV>,
  selectedValue: string
}>()

const emit = defineEmits<{
  select: [value: IStringKV]
}>()

const displayItems = ref<boolean>(false);

const onClick = () => {
  displayItems.value = !displayItems.value;
}

const onClickItem = (option: IStringKV) => {
  emit('select', option);
  displayItems.value = false;
}

</script>

<template>
  <div>
    <button @click="onClick" class="dropdown">
      {{ selectedValue }} 
      <i class="arrow down"></i>
    </button>
    <div v-if="displayItems" class="items">
      <div v-for="option in options" @click="onClickItem(option)" :key="option.key" class="item">
        {{ option.value }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.dropdown {
  position: relative;
  display: flex;
  justify-content: space-between;
  width: min(20rem, 100%);
  padding: 10px;
  font-size: 15px;
  font-family: Inter, sans-serif;
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

.arrow {
  border: solid black;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
}

.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
</style>
