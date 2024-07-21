<script setup lang="ts">
const props = defineProps<{
  title: string;
  price: number;
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
      gradient="to top, rgba(0, 0, 0, 1),rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0)"
    >
      <v-card-title class="text-overline">{{ $t(title) }}</v-card-title>

      <v-card-subtitle>{{
        $n(price, {
          style: "currency",
          currency: $t("currency"),
        })
      }}</v-card-subtitle>
    </v-img>

    <v-card-text class="text-caption">
      {{ $t(description) }}
    </v-card-text>

    <template #actions>
      <v-btn
        color="orange"
        :text="`${$t('buttonDonateText')} ${$t(title)}`"
        block
        position="absolute"
        location="bottom center"
        class="text-overline"
      />
    </template>
  </v-card>
</template>
