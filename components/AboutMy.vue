<script setup lang="ts"></script>

<template>
  <v-card min-height="268" rounded="xl" class="border-sm">
    <v-card-title>{{ $t("aboutMyTitle") }}</v-card-title>

    <v-card-text>
      <p class="text-caption">{{ $t("aboutMyFirstParagraph") }}</p>

      <p class="text-caption">{{ $t("aboutMySecondParagraph") }}</p>

      <p class="text-caption">{{ $t("aboutMyThirdParagraph") }}</p>

      <p class="text-caption">{{ $t("aboutMyFourthParagraph") }}</p>
    </v-card-text>
  </v-card>
</template>

<style lang="css" scoped>
p {
  margin: 20px 0px;
}
</style>
