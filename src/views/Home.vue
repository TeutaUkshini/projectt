 <template>
 <section>
  <div>
    <br>
    <h2><i>Welcome to our restaurant</i></h2>
    <h1></h1>
    <hr>
    </div>   
  <v-container>
    <v-layout row wrap class="mt-2">
      <v-flex xs12>
        <v-carousel>
          <v-carousel-item
            v-for="item in items"
            :src="item.imageUrl"
            :key="item.id">
            <div class="title">
              {{ item.title }}
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <v-layout row wrap  class="mt-2">
      <v-flex xs12 class="text-xs-center">
        <br>
        <v-spacer></v-spacer>
       <p><strong>For the best meals in Town!</strong></p>
      </v-flex>
    </v-layout>
  </v-container>
  <About/>
  <v-spacer></v-spacer>
       <hr color="gray" width="500px">
       <LatestPost />
     
      <br>
      <Comments />
<br>

      <br>

<div class="center">
      <v-row justify="center">
    <v-expansion-panels popout>
      <v-expansion-panel
        
      >
        <v-expansion-panel-header><strong>For more</strong></v-expansion-panel-header>
        <v-expansion-panel-content>
          <center>CONTACT US </center>
<br>
Call our reservations team on +355 69 210 8032 for more information.     
</v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
</div>

<br>


 </section>
</template>

<script>
import LatestPost from "../components/LatestPost";
import Comments from "../components/Comments.vue";
import About from "../components/About.vue";

  export default {
    name: "Home",
  components: {
      LatestPost,
      Comments,
      About,
  },
    data () {
      return {
        
        items: [
          { imageUrl: 'https://cairoscene.com/Content/Admin/Uploads/Articles/ArticlesMainPhoto/1085833/6ed73d8f-c15d-48be-8506-48ff7fde673d.jpeg', id: 'afajfjadfaadfa323', title: 'Front Door - Welcome' },
          { imageUrl: 'https://res.cloudinary.com/tf-lab/image/upload/w_600,h_337,c_fill,g_auto:subject,q_auto,f_auto/restaurant/a8e55171-41de-401c-8213-48900d5ed032/b0905ef8-95d6-4c41-b73b-92be68e900a8.jpg', id: 'aadsfhbkhlk1241', title: 'Our Kitchen' },
          { imageUrl: 'https://cdn.usarestaurants.info/assets/uploads/0ce1d925a976723ddf15d384be5baf57_-united-states-florida-miami-dade-county-miami-bonsai-thai-sushi-305-220-7755htm.jpg', id: 'aadsfhbkhlk1241', title: 'Serving Place' },
          { imageUrl: 'https://elavegan.com/wp-content/uploads/2021/06/vegan-sushi-on-a-white-plate-from-above.jpg', id: 'aadsfhbkhlk1241', title: 'Plates' },
          { imageUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/766/healthyfoodsnoteveryday-main-1508848485.jpg', id: 'aadsfhbkhlk1241', title: 'Foods' }

        ]
      }
    }
  }
</script>

<style scoped>
  .title {
    position: absolute;
    bottom: 50px;
    background-color: rgba(0,0,0,0.5);
    color: white;
    font-size: 2em;
    padding: 20px;
  }
  p{
    text-align: center;
  }
  .center{
    margin-left: 5.1%;
    margin-right: 5.1%;
    text-align: center;
    color:rgb(36, 28, 28);
  }
</style>