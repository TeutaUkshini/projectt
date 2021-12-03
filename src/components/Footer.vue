<template>
  <v-card height="100px" width="100%">
    <v-footer
      v-bind="localAttrs"
      :padless="padless"
    >
      <v-card
        flat
        tile
        width="100%"
        class="brown lighten-5 text-center"
      >
      <p><strong>Contact Us</strong>
          </p>
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            icon
          >
          
            <v-icon size="30px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Bonsai</strong>
        </v-card-text>
      </v-card>
    </v-footer>

    <v-row
      align="center"
      justify="center"
      
    >
     
    </v-row>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook', 
        'mdi-twitter', 
        'mdi-linkedin', 
        'mdi-instagram', 
        'mdi-google-plus', 
        'mdi-pinterest', 
      ],

     
    })
  }
</script>
