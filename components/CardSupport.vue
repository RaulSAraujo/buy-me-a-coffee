<script setup lang="ts"></script>

<template>
  <v-card class="mb-3 border-sm" elevation="0" rounded="xl">
    <v-card-title>{{ $t("cardSupportTitle") }}</v-card-title>

    <v-card-text>
      <p class="text-overline">{{ $t("cardSupportGreetings") }}</p>

      <p class="text-caption">{{ $t("cardSupportFirstParagraph") }}</p>

      <p class="text-caption">{{ $t("cardSupportSecondParagraph") }}</p>

      <p class="text-caption">{{ $t("cardSupportThirdParagraph") }}</p>

      <p class="text-caption">{{ $t("cardSupportFourthParagraph") }}</p>

      <p class="text-caption">{{ $t("cardSupportFifthParagraph") }}</p>

      <p class="text-caption">{{ $t("cardSupportSixthParagraph") }}</p>

      <p class="text-caption">{{ $t("cardSupportSevenParagraph") }}</p>
      
      <p class="text-caption">
        {{ $t("cardSupportEighthParagraph") }},<br />Raul Silva Araujo
      </p>
    </v-card-text>
  </v-card>
</template>

<style lang="css" scoped>
p {
  margin: 10px 0px;
}
</style>
