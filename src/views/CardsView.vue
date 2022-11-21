<script setup>
import Card from "../components/Card.vue";
import Form from "../components/Form.vue";
import userListData from "../models/users";
</script>

<template>
  <Form
    @userToAdd="createUser"
    :classProps="'cards-form'" />
  <section class="cards-wrapper">
    <Card
      v-for="user in usersList"
      :user="user"
      :key="user.id"
      @userToDelete="deleteUser"
      @userToEdit="userToEdit" />
  </section>
</template>

<!-- ================================================================================================================================ -->
<script>
export default {
  mounted() {
    this.usersList = [...userListData];
  },
  //--------------- DATA----------------------
  data() {
    return {
      usersList: [],
    };
  },
  //--------------- METHODS ----------------------
  methods: {
    createUser(user) {
      this.usersList.push(user);
    },
    deleteUser(id) {
      this.usersList = this.usersList.filter((user) => user.id !== id);
    },
    userToEdit(user) {
      console.log(user);

      // for (let i = 0; i < this.usersList.length; i++) {
      //   if (this.usersList[i].id === user.id) {
      //     this.usersList[i] = {...this.usersList[i], ...user};
      //   }
      // }

      const indexToUpdate = this.usersList.findIndex((userF) => userF.id === user.id);
      this.usersList[indexToUpdate] = {...user};

      // this.usersList = this.usersList.map((userMap) => {
      //   if (userMap.id === user.id) {
      //     return (userMap = {...user});
      //   }
      //   return userMap;
      // });
    },
  },
};
</script>
