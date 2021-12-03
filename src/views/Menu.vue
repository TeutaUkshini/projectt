<template>
  <div class="block latestPostBlock">
    <v-container>
      <h2 class="text-center"><i>Foods that our restaurant serve</i></h2>
<br>
<hr style="width:100px; margin: auto;" />
      <br>
      <v-row>
        <v-col v-for="item in items" :key="item.id" cols="12" md="4">
          <v-card outlined class="mx-auto">
            <v-img
              class="white--text align-end"
              height="200px"
              :src="item.src"
            >
              <v-card-title>{{ item.title }}</v-card-title>
            </v-img>
            <v-card-subtitle class="pb-0">{{ item.subtitle }}</v-card-subtitle>
            <v-card-text class="text--primary">
              <div>{{ item.description }}</div>
            </v-card-text>
            <v-card-actions>
        </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "LatestPost",
  data: () => ({
    show: false,
    items: [
      {
        id: 1,
        title: "Pasta",
        subtitle: "3 €",
        src: require("../assets/pasta.jpg")
      },
      {
        id: 2,
        title: "Easy Weeknight Spaghetti",
        subtitle: "3.50 €",
        src: require("../assets/istock.jpg")
      },
      {
        id: 3,
        title: "BBC",
        subtitle: "4 €",
        src: require("../assets/bbc.jpg")
      },
      {
        id: 3,
        title: "Fast Food",
        subtitle: "2.50 €",
        src: require("../assets/ff.jpg")
      },
      {
        id: 3,
        title: "Pancakes",
        subtitle: "2 €",
        src: require("../assets/ra.jpg")
      },
      {
        id: 3,
        title: "Chicken wings",
        subtitle: "3.50 €",
        src: require("../assets/image.jpg")
      },
      {
        id: 3,
        title: "Sushi",
        subtitle: "3,180 people like this",
        src: require("../assets/sushi.jpg")
      },
      {
        id: 3,
        title: "Fish",
        subtitle: "5.70 €",
        src: require("../assets/fish.jpg")
      },
      {
        id: 3,
        title: "Pumpkin pie",
        subtitle: "3.30 €",
        src: require("../assets/pie.jpg")
      },
    ]
  })
};
</script>