<template>
  <div class="block latestPostBlock">
    <v-container>
      <h2 class="text-center">Latest Posts</h2>
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
        title: "Best steak",
        subtitle: "1,000 people like this",
        description: "A steak is a meat generally sliced across the muscle fibers, potentially including a bone. It is normally grilled, though can also be pan-fried. Steak can also be cooked in sauce, such as in steak and kidney pie, or minced and formed into patties, such as hamburgers.",
        src: require("../assets/Steak.jpg")
      },
      {
        id: 2,
        title: "Easy Weeknight Spaghetti",
        subtitle: "1,052 people like this",
        description: "Spaghetti is a long, thin, solid, cylindrical pasta. It is a staple food of traditional Italian cuisine. Like other pasta, spaghetti is made of milled wheat and water and sometimes enriched with vitamins and minerals. Italian spaghetti is typically made from durum wheat semolina.",
        src: require("../assets/istock.jpg")
      },
      {
        id: 3,
        title: "shrimp with garlic sauce",
        subtitle: "3,180 people like this",
        description: "Shrimp are decapod crustaceans with elongated bodies and a primarily swimming mode of locomotion – most commonly Caridea and Dendrobranchiata. More narrow definitions may be restricted to Caridea, to smaller species of either group or to only the marine species.",
        src: require("../assets/download.jpg")
      }
    ]
  })
};
</script>