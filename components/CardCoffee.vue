<script setup lang="ts">
const props = defineProps<{
  title: string;
  price: string;
  description: string;
  src: string;
}>();

const img = useImage();

const _srcset = computed(() => {
  return img.getSizes(props.src, {
    sizes: "xs:100vw sm:100vw md:100vw lg:100vw xl:100vw",
    modifiers: {
      format: "webp",
      quality: 100,
    },
  });
});
</script>

<template>
  <v-card class="border-sm" rounded="xl" elevation="0" height="410">
    <v-img
      :lazy-src="img(src, { quality: 50 })"
      :src="img(src, { quality: 100 })"
      :srcset="_srcset.srcset"
      height="200"
      cover
      class="align-end text-white"
      gradient="to top, rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0)"
    >
      <v-card-title class="text-overline">{{ title }}</v-card-title>
    </v-img>

    <v-card-text class="text-caption">
      {{ description }}
    </v-card-text>

    <template #actions>
      <v-btn
        color="orange"
        :text="`DONATION ${price}`"
        block
        position="absolute"
        location="bottom center"
      />
    </template>
  </v-card>
</template>
