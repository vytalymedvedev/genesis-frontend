<script setup lang="ts">
import { ref, computed } from 'vue';
import Dropdown from '../components/Dropdown.vue';
import Button from '../components/Button.vue';

const options = ref<Array<string>>(['Не выбрано', 'Сделка', 'Контакт','Компания']);
const selectedValue = ref<string>(options.value[0]);

const disabledButton = computed(() => selectedValue.value === options.value[0]);

const onSelect = (value: string) => {
  selectedValue.value = value;
}
const onClick = () => {
  console.log('Clicked');
}
</script>

<template>
  <main>
    <Dropdown @select="onSelect" :options="options" :selected-value="selectedValue"/>
    <Button @click="onClick" label="Создать" :disabled="disabledButton" />
  </main>
</template>
