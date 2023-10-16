import axios from 'axios';
import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { ITableEntity } from '../interfaces/ITableEntity';


export const useStore = defineStore('common', () => {
  const entities = ref<ITableEntity[]>([]);

  function addEntity(entity: ITableEntity) {
    entities.value.push(entity);
  }

  async function createEntity(obj: {entityName: string, name: string}) {
    const entityData: {name: string} = { name: obj.name };

      await axios.post(`${import.meta.env.VITE_BACKEND_BASE_URL}${obj.entityName}/create`, entityData)
      .then(response => addEntity(response.data));
  
      // await axios.get(`${import.meta.env.VITE_BACKEND_BASE_URL}company/all`)
      //  .then(response => console.log(response.data));
  }

  return { entities, addEntity, createEntity }
})
