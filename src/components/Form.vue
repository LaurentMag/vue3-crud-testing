<template>
  <form
    @submit.prevent="submitForm"
    :class="classProps">
    <div class="card-form-label-input">
      <label for="nameid">Nom</label>
      <input
        @input="formChange($event)"
        id="nameid"
        name="name"
        type="text"
        :value="userToCreate.name" />
    </div>
    <div class="card-form-label-input">
      <label for="descriptionid">Description</label>
      <input
        @input="formChange($event)"
        id="descriptionid"
        name="description"
        type="text"
        :value="userToCreate.description" />
    </div>
    <button @click="">Submit</button>
  </form>
</template>

<!-- ================================================================================================================================ -->
<script>
export default {
  mounted() {
    //console.log("form is mounted");
  },
  created() {
    if (this.userProp !== undefined) {
      // set date into the userToCreate
      this.userToCreate = {
        ...this.userToCreate,
        ...this.userProp,
      };
      this.isEditMod = true;
    } else {
      this.isEditMod = false;
    }
  },
  //--------------- PROPS----------------------
  props: {
    classProps: String,
    // should create a type instead of using obj, but, for testing purpose that's "fine"
    userProp: Object,
  },
  //--------------- DATA----------------------
  data() {
    return {
      userToCreate: {
        id: 0,
        name: "",
        description: "",
      },
      isEditMod: false,
    };
  },
  //--------------- METHODS----------------------
  methods: {
    generateRandomId() {
      return Math.floor(Math.random() * 132523 + 1);
    },
    formChange(e) {
      const input = e.target.name;
      const value = e.target.value;

      this.userToCreate[input] = value;
    },
    submitForm() {
      if (this.isEditMod) {
        const userToEdit = {...this.userToCreate};
        this.$emit("userToEdit", userToEdit);
      } else {
        // need spread otherwise it stay connected and change according :O :O
        const newUser = {...this.userToCreate, id: this.generateRandomId()};
        this.$emit("userToAdd", newUser);
      }
    },
  },
};
</script>
