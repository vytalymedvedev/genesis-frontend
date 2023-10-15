<script setup lang="ts">
import axios from 'axios';
import { ref, computed } from 'vue';
import DropdownButton from '../components/DropdownButton.vue';
import ButtonSpinner from '../components/ButtonSpinner.vue';
import SimpleTable from '../components/SimpleTable.vue';

const options = ref<Array<string>>(['Не выбрано', 'Сделка', 'Контакт','Компания']);
const selectedValue = ref<string>(options.value[0]);
const items = ref<Array<{name: string, id: string}> | null>(null);
const loading = ref<boolean>(false);

const disabledButton = computed(() => selectedValue.value === options.value[0]);

//Mock data
const details = [
  {name: 'Контакт', id: '3248757'},
  {name: 'Компания', id: '7567676'},
  {name: 'Сделка', id: '978778'},
  {name: 'Компания', id: '45654'},
  {name: 'Компания', id: '6546667'}
];

const onSelect = (value: string) => {
  selectedValue.value = value;
}
const onClick = async () => {
  if(loading.value) {
    return;
  }

  loading.value = true;

  items.value = await new Promise(resolve => setTimeout(() => {
    resolve(details);
  }, 2000));
  
  loading.value = false;
}

</script>

<template>
  <main>
    
    <div class="handlers">
      <DropdownButton 
        @select="onSelect"
        :options="options"
        :selected-value="selectedValue"
      />
      <ButtonSpinner
        @click="onClick"
        label="Создать"
        :disabled="disabledButton"
        :showSpinner="loading"
        class="button-spinner"
      />
    </div>
    <SimpleTable 
      :items="items"
      class="simple-table"
    />
  </main>
</template>

<style>
.simple-table {
  margin-top: 3rem;
}

.handlers {
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  width: min(800px, 100%);
}

.button-spinner {
  justify-self: start;
}
</style>