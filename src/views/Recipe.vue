<template>
  <div class="ma-10">
    <h1>Add your new recipe</h1>
    <h1></h1>
    <v-divider class="my-6" />
    <v-alert
      v-model="message.state"
      dismissible
      :color="message.color"
      border="left"
      elevation="2"
      colored-border
      :icon="message.icon"
    >
      {{ message.content }}
    </v-alert>
    <v-btn color="primary" @click="addRecipe"> Add a recipe </v-btn>
    <v-data-table
      :headers="headers"
      :items="allRecipes"
      :key="dtableKey"
      class="elevation-6 mt-6"
    >
<template v-slot:[`item.actions`]="{ item }">
     <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
        <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
      </template>
<template v-slot:[`item.req`]="{ item }">
        <v-chip
          class="pa-2 mr-2"
          v-for="ingridiens in item.requiredFood"
          :key="ingridiens.id"
          small
          color="secondary"
          text-color="white"
        >
          {{ ingridiens }}
        </v-chip>
      </template>
      <template v-slot:no-data>
        <span>Nothing to display</span>
      </template>
    </v-data-table>

    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-form ref="form" v-model="validLogin" lazy-validation>
          <v-card-title>
            <span class="text-h5">To continue,please Login!</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="Username*"
                    hint="your username is required"
                    v-model="username"
                    :rules="isRequiredField"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Password*"
                    type="password"
                    v-model="password"
                    :rules="isRequiredField"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <small>*All Fields are required</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn v-if=" username && password" color="blue darken-1" text @click="closeDialog">
              Close
            </v-btn>
            <v-btn v-if=" username && password" color="blue darken-1" text @click="login"> Login </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>

    <v-dialog v-model="recipeDialog" persistent max-width="600px">
      <v-card>
        <v-form ref="form" v-model="validLogin" lazy-validation>
          <v-card-title>
            <span class="text-h5"
              >{{ editedIndex === -1 ? "Add " : "Edit " }} Recipe</span
            >
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="Recipe*"
                    hint="set a name for this recipe is required"
                    v-model="editedRecipe.name"
                    :rules="isRequiredField"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Recipe Creator"
                    v-model="editedRecipe.creator"
                  ></v-text-field>
                </v-col>
                <v-checkbox
                  v-model="editedRecipe.requiredFood"
                  v-for="check in availableFoods"
                  :key="check.id"
                  :label="check"
                  :value="check"
                  class="mr-5"
                ></v-checkbox>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="closeDialog">
              Cancel
            </v-btn>
            <v-btn color="blue darken-1" text @click="saveRecipe"> Save </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>

    <v-dialog v-model="deleteDialog" max-width="500px">
      <v-card>
        <v-card-title class="text-h5"
          >Are you sure you want to delete this item?</v-card-title
        >
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeDialog">Cancel</v-btn>
          <v-btn color="blue darken-1" text @click="handleDelete">Yes</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    validLogin: true,
    isRequiredField: [(v) => !!v || "This field is required"],
    dialog: false,
    recipeDialog: false,
    deleteDialog: false,
    dtableKey: 0,
    headers: [
      { text: "#", align: "start", sortable: false, value: "$id" },
      { text: "Recipe", align: "start", value: "name" },
      { text: "Recipe Creator", value: "creator" },
      { text: "Ingredients", value: "req" },
      { text: "Actions", align: "end", sortable: false, value: "actions" },
    ],
    username: "",
    password: "",
    message: {
      state: false,
      content: "",
      icon: "mdi-check",
      color: "",
    },
    editedIndex: -1,
    editedRecipe: {
      $id: undefined,
      name: undefined,
      creator: undefined,
      requiredFood: [],
    },
    newRecipe: {
      $id: undefined,
      name: undefined,
      creator: undefined,
      requiredFood: [],
    },
    availableFoods: ["Flour", "Salt", "Sugar", "Water", "Meat", "Eggs"],
    allRecipes: [],
  }),
  created() {
    this.allRecipes =
      localStorage.getItem("app-recipes") !== null
        ? JSON.parse(localStorage.getItem("app-recipes"))
        : [];
  },
  methods: {
    addRecipe() {
      if (!this.$loggedIn) {
        this.dialog = true;
      } else {
        this.recipeDialog = true;
      }
    },
    closeDialog() {
      this.dialog = false;
      this.recipeDialog = false;
      this.deleteDialog = false;
      this.editedIndex = -1;
      this.dtableKey++;
    },
    login() {
      const isFormValid = this.$refs.form.validate();
      if (!isFormValid) {
        return false;
      }
      this.closeDialog();
      if (this.username === "admin" && this.password === "npost") {
        sessionStorage.setItem("userIsLogged", "user logged");
        this.$loggedIn = true;
        this.message = {
          ...this.message,
          state: true,
          content: "Succcessfuly logged In",
          icon: "mdi-check-circle",
          color: "success",
        };
      } else {
        this.message = {
          ...this.message,
          state: true,
          content: "Invalid Username or Password",
          icon: "mdi-check-circle",
          color: "error",
        };
      }
      setTimeout(() => {
        this.message.state = false;
        this.$router.go(0);
      }, 3000);
    },
    saveRecipe() {
      if (this.editedIndex < 0) {
        const data = { ...this.editedRecipe };
        this.allRecipes.push(data);
      } else {
        this.allRecipes[this.editedIndex] = this.editedRecipe;
      }
      this.message = {
        ...this.message,
        state: true,
        content: "Successfully Added | Edited an Recipe",
        icon: "mdi-check-circle",
        color: "info",
      };
      this.editedRecipe = Object.assign({}, this.newRecipe);
      this.saveLocal();
    },
    editItem(item) {
      this.editedIndex = this.allRecipes.indexOf(item);
      this.editedRecipe = Object.assign({}, item);
      this.recipeDialog = true;
    },
    deleteItem(item) {
      this.editedIndex = this.allRecipes.indexOf(item);
      this.deleteDialog = true;
    },
    handleDelete() {
      this.allRecipes.splice(this.editedIndex, 1);
      this.saveLocal();
    },
saveLocal() {
      const data = JSON.stringify(this.allRecipes);
      localStorage.setItem("app-recipes", data);
      this.closeDialog();
      setTimeout(() => (this.message.state = false), 3000);
    },
  }, 
};
</script>