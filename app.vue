<script setup lang="ts">
import CardCoffee from './components/CardCoffee.vue';

const caffeItems = [
  {
    title: "Café coado ou filtrado",
    price: "R$ 4,00",
    src: "https://cdn.abrahao.com.br/base/7b6/70d/553/cafe-coado.jpg",
    description:
      "Aqui está o café passado no coador! Sério, gente, eu não consigo começar o dia sem ele. Pode ser o tradicional no coador de pano ou aquele mais profissional. Alguém poderia me fazer um, por favor ?",
  },
  {
    title: "Espresso",
    price: "R$ 7,00",
    src: "https://cdn.abrahao.com.br/base/fa7/518/562/espresso.jpg",
    description:
      "Concentrado e de rápido preparo, o espresso é aquele shot de energia que todo programador precisa! Nos cafés chiques, ele vem em 30 ml, mas, sinceramente, aqui no Brasil, eu adoraria receber uma xícara cheia até a borda. Alguém poderia me trazer um espresso assim? Preciso para continuar codando!",
  },
  {
    title: "Pingado",
    price: "R$ 9,00",
    src: "https://cdn.abrahao.com.br/base/f4d/0e2/e7f/pingado.jpg",
    description:
      "O pingado, nosso famoso 'café com leite', é o rei das mesas brasileiras! Ele ganha esse nome porque, supostamente, é só um 'pingado de leite' no café para ficar perfeito, mas a verdade é que a proporção dos ingredientes não importa tanto assim. Alguém pode me preparar um pingado bem gostoso?",
  },
  {
    title: "Cappuccino",
    price: "R$ 10,00",
    src: "https://cdn.abrahao.com.br/base/4fb/e07/3f1/cappuccino.jpg",
    description:
      "Não tem como negar, o cappuccino é a versão 'gourmetizada' de café mais famosa por aí! Um terço de espresso, um terço de leite vaporizado e um terço de espuma de leite densa e cremosa – é praticamente uma obra de arte líquida. Alguém poderia me preparar um desses? Preciso desse luxo para encarar minhas linhas de código como se estivesse em um café estrelado!",
  },
  {
    title: "Latte",
    price: "R$ 12,00",
    src: "https://cdn.abrahao.com.br/base/f50/c70/35e/latte.jpg",
    description:
      "De origem italiana, o latte é o clássico composto por espresso, duas doses de leite vaporizado e uma camada fina de espuma de leite. Ele é frequentemente confundido com o café com leite ou até chamado de 'cappuccino com mais leite'. Se alguém puder me fazer um latte, seria ótimo! Preciso de toda essa combinação suave para manter meu código em dia e minha mente fresca. Sem esquecer, claro, a espuma leve para o toque final!",
  },
  {
    title: "Frappuccino",
    price: "R$ 19,00",
    src: "https://cdn.abrahao.com.br/base/fea/16e/782/frappuccino.jpg",
    description:
      "Com café ou descafeinado, o frappuccino é a escolha perfeita para os dias quentes! Ele começa com sorvete e espresso, e pode levar outros ingredientes a gosto. O resultado é um milk-shake de café que nunca vem em menos de 300 ml. Se alguém puder me preparar um frappuccino gigante, eu agradeço! Vou precisar dessa refrescante dose de café para encarar o dia e codar com mais energia!",
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
            <v-list-item title="PORTUGUES" value="PORTUGUES" />
            <v-list-item title="ENGLES" value="ENGLES" />
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
                  v-for="caffe in caffeItems"
                  :key="caffe.title"
                  cols="12"
                  md="6"
                  lg="4"
                >
                  <CardCoffee
                    :title="caffe.title"
                    :price="caffe.price"
                    :src="caffe.src"
                    :description="caffe.description"
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