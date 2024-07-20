<script setup lang="ts">
const img = useImage();

const src = ref(
  "https://cafemoraes.com.br/wp-content/uploads/2023/10/cafe-do-programador-cabo-e-interior-preto-java.jpg"
);

const _srcset = computed(() => {
  return img.getSizes(src.value, {
    sizes: "xs:100vw sm:100vw md:100vw lg:100vw xl:100vw",
    modifiers: {
      format: "webp",
      quality: 100,
    },
  });
});
</script>

<template>
  <v-app>
    <v-app-bar elevation="0" scroll-behavior="elevate">
      <template #prepend>
        <v-icon icon="mdi-coffee" size="40" class="ml-2" />
      </template>

      <v-app-bar-title>
        <span>Raul Silva Araujo</span>
      </v-app-bar-title>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12" md="2">
            <v-sheet min-height="268" rounded="lg" elevation="10" class="pa-2">
              <p class="text-center text-subtitle-1 font-weight-bold">INTRODUÇÃO</p>

              <span class="text-subtitle-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil ea
                veritatis, velit consequuntur harum libero voluptates quia recusandae.
                Molestiae eligendi itaque laudantium suscipit veniam molestias fugiat
                repellendus voluptatum rem id!
              </span>
            </v-sheet>

            <v-sheet min-height="268" rounded="lg" elevation="10" class="mt-3 pa-2">
              <p class="text-center text-subtitle-1 font-weight-bold">DONATION</p>

              <span class="text-subtitle-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil ea
                veritatis, velit consequuntur harum libero voluptates quia recusandae.
                Molestiae eligendi itaque laudantium suscipit veniam molestias fugiat
                repellendus voluptatum rem id!
              </span>
            </v-sheet>
          </v-col>

          <v-col cols="12" md="8">
            <v-sheet min-height="70vh" rounded="lg" class="pa-4" elevation="1">
              <v-row justify="center" align="center">
                <v-col cols="12" md="6" lg="4">
                  <CardCaffe
                    title="Café coado ou filtrado"
                    price="R$ 4,00"
                    src="https://cdn.abrahao.com.br/base/7b6/70d/553/cafe-coado.jpg"
                    :description="`Aqui está o café passado no coador! Sério, gente, eu não consigo
                    começar o dia sem ele. Pode ser o tradicional no coador de pano ou
                    aquele mais profissional. Alguém poderia me fazer um, por favor?`"
                  />
                </v-col>

                <v-col cols="12" md="6" lg="4">
                  <CardCaffe
                    title="Espresso"
                    price="R$ 7,00"
                    src="https://cdn.abrahao.com.br/base/fa7/518/562/espresso.jpg"
                    :description="`Concentrado e de rápido preparo, 
                    o espresso é aquele shot de energia que todo programador precisa! 
                    Nos cafés chiques, 
                    ele vem em 30 ml, mas, sinceramente, 
                    aqui no Brasil, eu adoraria receber uma xícara cheia 
                    até a borda. Alguém poderia me trazer um espresso assim? Preciso para continuar codando!`"
                  />
                </v-col>

                <v-col cols="12" md="6" lg="4">
                  <CardCaffe
                    title="Pingado"
                    price="R$ 9,00"
                    src="https://cdn.abrahao.com.br/base/f4d/0e2/e7f/pingado.jpg"
                    :description="`O pingado, nosso famoso 'café com leite', 
                    é o rei das mesas brasileiras! Ele ganha esse nome porque, 
                    supostamente, é só um 'pingado de leite' no café para ficar perfeito, 
                    mas a verdade é que a proporção dos ingredientes não importa tanto assim. 
                    Alguém pode me preparar um pingado bem gostoso?`"
                  />
                </v-col>

                <v-col cols="12" md="6" lg="4">
                  <CardCaffe
                    title="Cappuccino"
                    price="R$ 10,00"
                    src="https://cdn.abrahao.com.br/base/4fb/e07/3f1/cappuccino.jpg"
                    :description="`Não tem como negar, 
                    o cappuccino é a versão 'gourmetizada' de café mais famosa por aí! 
                    Um terço de espresso, 
                    um terço de leite vaporizado e um terço de espuma de leite densa e cremosa – 
                    é praticamente uma obra de arte líquida. Alguém poderia me preparar um desses? 
                    Preciso desse luxo para encarar minhas linhas de código como se estivesse em um café estrelado!`"
                  />
                </v-col>

                <v-col cols="12" md="6" lg="4">
                  <CardCaffe
                    title="Latte"
                    price="R$ 12,00"
                    src="https://cdn.abrahao.com.br/base/f50/c70/35e/latte.jpg"
                    :description="`De origem italiana,
                     o latte é o clássico composto por espresso,
                      duas doses de leite vaporizado e uma camada fina de espuma de leite. 
                      Ele é frequentemente confundido com o café com leite ou até chamado de 'cappuccino com mais leite'. 
                      Se alguém puder me fazer um latte, seria ótimo! 
                      Preciso de toda essa combinação suave para manter meu código em dia e minha mente fresca. 
                      Sem esquecer, claro, a espuma leve para o toque final!`"
                  />
                </v-col>

                <v-col cols="12" md="6" lg="4">
                  <CardCaffe
                    title="Frappuccino"
                    price="R$ 19,00"
                    src="https://cdn.abrahao.com.br/base/fea/16e/782/frappuccino.jpg"
                    :description="`Com café ou descafeinado, 
                    o frappuccino é a escolha perfeita para os dias quentes! 
                    Ele começa com sorvete e espresso, e pode levar outros ingredientes a gosto. 
                    O resultado é um milk-shake de café que nunca vem em menos de 300 ml. 
                    Se alguém puder me preparar um frappuccino gigante, eu agradeço! 
                    Vou precisar dessa refrescante dose de café para encarar o dia e codar com mais energia!`"
                  />
                </v-col>
              </v-row>
            </v-sheet>
          </v-col>

          <v-col cols="12" md="2">
            <v-sheet min-height="268" rounded="lg" elevation="10" class="pa-2">
              <p class="text-center text-subtitle-1 font-weight-bold">INTRODUÇÃO</p>

              <span class="text-subtitle-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil ea
                veritatis, velit consequuntur harum libero voluptates quia recusandae.
                Molestiae eligendi itaque laudantium suscipit veniam molestias fugiat
                repellendus voluptatum rem id!
              </span>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
