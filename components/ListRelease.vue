<template>
  <v-list
    v-for="item in data"
    :key="item.id"
    :title="item.name"
    subtitle="..."
    class="d-flex justify-space-between align-center mx-5"
  >
    <v-sheet class="d-flex flex-column">
      <sup class="mt-2">{{ item.createdAt }}</sup>
      <v-list-item>
        <v-icon :color="item.type === 'Saída' ? 'red' : 'green'">{{ item.type === 'Saída' ? 'mdi-cash-minus' : 'mdi-cash-plus'}}</v-icon>
        {{ item.name }}
      </v-list-item>
    </v-sheet>

    <v-icon>
      mdi-delete
    </v-icon>
  </v-list>
</template>
<script setup>
  const store = useCounterStore()
  const data = ref([])
  
  onMounted(async () => {
    try {
      await store.getReleases();
      data.value = store.release
      console.log("data>> ", store.release);
    } catch (error) {
      console.error(error);
    }
  })

</script>

