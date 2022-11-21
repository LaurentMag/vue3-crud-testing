<script setup>
import Form from "./Form.vue";
</script>

<template>
  <section class="card">
    <div
      class="card-info-container"
      v-if="!isEditMod">
      <h2>{{ this.user.name }}</h2>
      <p>{{ this.user.description }}</p>
    </div>

    <Form
      v-else
      :classProps="'card-edit-form'"
      :userProp="this.user"
      @userToEdit="userToEdit" />

    <div class="card-button-container">
      <button @click.prevent="deleteButtonClick">❌</button>
      <button @click.prevent="editMode">✏️</button>
    </div>
  </section>
</template>

<!-- ================================================================================================================================ -->
<script>
export default {
  mounted() {
    //console.log("card is mounted");
  },
  //--------------- PROPS----------------------
  props: ["user"],
  //--------------- CREATED----------------------
  created() {},
  //--------------- METHODS----------------------
  data() {
    return {
      isEditMod: false,
    };
  },
  //--------------- METHODS----------------------
  methods: {
    deleteButtonClick() {
      this.$emit("userToDelete", this.user.id);
    },
    editMode() {
      this.isEditMod = !this.isEditMod;
    },
    userToEdit(user) {
      this.$emit("userToEdit", user);
      this.isEditMod = false;
    },
  },
};
</script>
