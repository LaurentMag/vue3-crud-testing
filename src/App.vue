<script setup>
import {RouterLink, RouterView} from "vue-router";
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125" />

    <div class="wrapper">
      <nav class="navbar">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/testing">Tests</RouterLink>
        <RouterLink to="/counter">Counter</RouterLink>
        <RouterLink to="/cards">Cards</RouterLink>
      </nav>
    </div>
  </header>

  <!-- this is the page content -->
  <!-- routerView remplace is temp placeholder that will be changed to the comp associatec with a selected route -->
  <RouterView />
</template>
