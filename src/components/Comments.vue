<template>
<section>
<div><i>Our Customers Review</i></div>
<br>
<hr style="width:100px; margin: auto;" />
<br>
  <v-row>
    <v-col
      cols="12"
      sm="6"
      offset-sm="3"
    >
      <v-card>
        <v-list two-line>
          <template v-for="(item, index) in items.slice(0, 6)">
            <v-subheader
              v-if="item.header"
              :key="item.header"
            >
              {{ item.header }}
            </v-subheader>
            <v-divider
              v-else-if="item.divider"
              :key="index"
              :inset="item.inset"
            ></v-divider>
            <v-list-item
              v-else
              :key="item.title"
            >
              <v-list-item-avatar>
                <img :src="item.avatar">
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-html="item.title"></v-list-item-title>
                <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</section>
</template>

<script>
  export default {
    data: () => ({
      items: [
        { header: 'Today' },
        { avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg', title: 'Have u tried Food here?', subtitle: `<span class="font-weight-bold">Ali Connors</span> &mdash; Stopped in for breakfast. Service was awesome! Seemed like a well running family team. Our family ordered bagels and breakfast sandwiches. Bagels were true <br>NY bagels and egg sandwiches were delicious.There were a few places to sit. They even had a salad station where they prepare fresh for you.` },
        { divider: true, inset: true },
        { avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg', title: 'Hospitality & Experience' , subtitle: `<span class="font-weight-bold">to Alex, Scott, Jennifer</span> &mdash; we stumbled across this place as we were looking for something to eat for lunch and saw the subway sign and headed towards it but  next door was this amazing place. The food was delicous, <br>very reasonably priced and lots on offer. staff werre friendly and helpful. highly recommned this place.` },
        { divider: true, inset: true },
        { avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg', title: 'Service & Accommodation', subtitle: '<span class="font-weight-bold">Sandra Adams</span> &mdash; Service was very good. While the Oyster Rockefeller was less than average, the chateaubriand shared with my wife was cooked (medium rare) perfectly. My son enjoyed his mutton. Overall very good dining experience - love the dining room.' },
      ],
    }),
  }
</script>

<style scoped>
p{
    font-weight:bold;
    
}
section{
    margin-left: -40%;
    margin-right: -40%;
    text-align: center;
    color:rgb(36, 28, 28);
}

</style>