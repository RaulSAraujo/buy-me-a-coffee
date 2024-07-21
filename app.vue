<script setup lang="ts">
const { setLocale } = useI18n();

const coffeeItems = [
  {
    title: "coffeeStrainedOrFilteredTitle",
    price: 4.0,
    src: "https://cdn.abrahao.com.br/base/7b6/70d/553/cafe-coado.jpg",
    description: "coffeeStrainedOrFilteredDescription",
  },
  {
    title: "coffeExpressoTitle",
    price: 7.0,
    src: "https://cdn.abrahao.com.br/base/fa7/518/562/espresso.jpg",
    description: "coffeExpressoDescription",
  },
  {
    title: "coffePingeTitle",
    price: 9.0,
    src: "https://cdn.abrahao.com.br/base/f4d/0e2/e7f/pingado.jpg",
    description: "coffePingeDescription",
  },
  {
    title: "coffeCappuccinoTitle",
    price: 10.0,
    src: "https://cdn.abrahao.com.br/base/4fb/e07/3f1/cappuccino.jpg",
    description: "coffeCappuccinoDescription",
  },
  {
    title: "coffeLatteTitle",
    price: 12.0,
    src: "https://cdn.abrahao.com.br/base/f50/c70/35e/latte.jpg",
    description: "coffeLatteDescription",
  },
  {
    title: "coffeFrappuccinoTitle",
    price: 19.0,
    src: "https://cdn.abrahao.com.br/base/fea/16e/782/frappuccino.jpg",
    description: "coffeFrappuccinoDescription",
  },
];
</script>

<template>
  <v-app>
    <v-app-bar scroll-behavior="elevate">
      <template #prepend>
        <v-icon icon="mdi-coffee" size="40" class="ml-2" />
      </template>

      <v-app-bar-title>
        <span>Raul Silva Araujo</span>
      </v-app-bar-title>

      <v-app-bar-items>
        <v-menu transition="scale-transition">
          <template #activator="{ props }">
            <v-btn icon="mdi-translate" v-bind="props" />
          </template>

          <v-list density="compact" nav>
            <v-list-item title="PORTUGUÊS" value="pt" @click="setLocale('pt')" />
            <v-list-item title="INGLÊS" value="en" @click="setLocale('en')" />
          </v-list>
        </v-menu>
      </v-app-bar-items>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row dense justify="center">
          <v-col cols="12" md="3">
            <CardSupport />

            <AboutMy />
          </v-col>

          <v-col cols="12" md="7">
            <v-sheet min-height="70vh" rounded="xl" class="mb-3">
              <v-row dense justify="center" align="center">
                <v-col
                  v-for="coffee in coffeeItems"
                  :key="coffee.title"
                  cols="12"
                  md="6"
                  lg="4"
                >
                  <CardCoffee
                    :title="coffee.title"
                    :price="coffee.price"
                    :src="coffee.src"
                    :description="coffee.description"
                  />
                </v-col>
              </v-row>
            </v-sheet>

            <CoffeeDonors />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
