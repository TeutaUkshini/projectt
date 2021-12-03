<template>
  <v-app>
    <v-app-bar app color="brown lighten-1" dark>
      <div class="d-flex align-center">
        <h3><i> Bonsai Restaurant </i></h3>
      </div>

      <v-spacer></v-spacer>

      <div>
        <v-list flat light style="background: none !important">
          <v-list-item-group
            v-model="currentMenuId"
            color="lime lighten-1"
            class="d-flex align-center"
          >
            <v-list-item
              v-for="(item, i) in menu"
              :key="i"
              class="ml-4"
              :to="item.uri"
            >
              <v-list-item-icon class="mr-0">
                <v-icon small v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </div>

     
      <v-spacer></v-spacer>

      <v-btn
        color="normal"
        small
        class="py-5"
        v-if="$loggedIn"
        @click="logoutDialog = true"
      >
        <v-icon small>mdi-trash-can-outline</v-icon>
        <span class="ml-2"> Log Out </span>
      </v-btn>

      <v-dialog v-model="logoutDialog" max-width="500px">
        <v-card>
          <v-card-title class="text-h5"
            >Are you sure you want to to log out?</v-card-title
          >
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="logoutDialog = false"
              >Cancel</v-btn
            >
            <v-btn color="blue darken-1" text @click="logout">Yes</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-app-bar>

    <v-main>
      <router-view />
      
    </v-main>
  <v-footer>
      <Footer />
    </v-footer>
  </v-app>
</template>

<script>
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components:{
    Footer
  },

  
  data: () => ({
    currentMenuId: 0,
    logoutDialog: false,
     menu: [
      { text: "Home", icon: "mdi-home", uri: "/" },
      { text: "Menu", icon: "mdi-reorder-horizontal ", uri: "/menu" },
      { text: "Recipe", icon: "mdi-printer-check", uri: "/recipe" },
      { text: "Contact Us", icon: "mdi-contacts-outline", uri: "/contact" },
    ],
  }),
  methods: {
    logout() {
      sessionStorage.removeItem("userIsLogged");
      this.$router.go(0);
    },
  },
};
</script>