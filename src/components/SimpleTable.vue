<script setup lang="ts">
defineProps<{
  items: Array<{name: string, id: string}> | null
}>()

</script>

<template>
  <table v-if="items?.length" class="simple-table">
    <thead>
      <tr>
        <th>Название</th>
        <th>Идентификатор</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item.id">
        <td>{{ item.name }}</td>
        <td>{{ item.id }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.simple-table {
  border-collapse: collapse;
  border: 2px solid black;
  border-radius: 8px;
  width: min(400px, 100%);
}

.simple-table thead tr {
  font: bold 1.2rem sans-serif;
  text-align: left;
}

.simple-table thead {
  border-bottom: 2px solid black;
}

.simple-table th,
.simple-table td {
  padding: 1rem;
}

.simple-table tbody tr {
  border-bottom: 1px solid black;
}

.simple-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}
</style>
