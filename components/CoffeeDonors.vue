<script setup lang="ts">
const messages = ref([
  {
    name: "Raul",
    time: "10:42am",
    message: `Sure, I'll see you later.`,
  },
  {
    name: "Raul",
    time: "10:42am",
    message: `Sure, I'll see you later.`,
  },
  {
    name: "Raul",
    time: "10:42am",
    message: `Sure, I'll see you later.`,
  },
  {
    name: "Raul",
    time: "10:42am",
    message: `Sure, I'll see you later.`,
  },
  {
    name: "Raul",
    time: "10:42am",
    message: `Sure, I'll see you later.`,
  },
]);
</script>

<template>
  <v-sheet
    height="260"
    rounded="xl"
    variant="outlined"
    class="pa-2 border-sm overflow-auto"
  >
    <p class="text-center text-h6 font-weight-bold">APOIADORES</p>

    <v-divider />

    <v-virtual-scroll :items="messages" height="200" class="mt-1">
      <template #default="{ item }">
        <v-list-item :title="item.name" :subtitle="`${item.message}`">
          <template #prepend>
            <v-icon class="bg-primary rounded-xl">mdi-account</v-icon>
          </template>

          <template #append>
            <v-icon icon="mdi-clock" size="small" />
            <label class="text-caption">{{ item.time }}</label>
          </template>
        </v-list-item>
      </template>
    </v-virtual-scroll>
  </v-sheet>
</template>
