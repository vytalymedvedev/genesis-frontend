<script setup lang="ts">
import { ref, computed } from 'vue';
import DropdownButton from '../components/DropdownButton.vue';
import ButtonSpinner from '../components/ButtonSpinner.vue';
import SimpleTable from '../components/SimpleTable.vue';
import { useStore } from '../stores/store';
import type { IStringKV } from '../interfaces/IStringKV';
import type { Entity } from '../types/Entity';
import  { options as entityOptions } from '../utils/entity-options';

const { entities, createEntity } = useStore();

const forbiddenOption: Entity = 'empty';

const options = ref<IStringKV[]>(entityOptions);
const selectedValue = ref<IStringKV>(options.value[0]);
const loading = ref<boolean>(false);

const disabledButton = computed(() => selectedValue.value?.key === forbiddenOption);

const onSelect = (option: IStringKV) => {
  selectedValue.value = option;
}
const onClick = async () => {
  if(loading.value) {
    return;
  }

  loading.value = true;

  try {
    await createEntity({entityName: selectedValue.value?.key, name: selectedValue.value?.value});
  } catch (e: any) {
    console.log(e);
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <main>
    
    <div class="handlers">
      <DropdownButton 
        @select="onSelect"
        :options="options"
        :selected-value="selectedValue.value"
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
      :items="entities"
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