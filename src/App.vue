<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <app-layout></app-layout>
    <app-footer />
  </div>
</template>

<script>
import appLayout from "@/components/Layouts/Layout.vue";
import appFooter from "@/components/base/Footer.vue";
export default {
  components: {
    appLayout,
    appFooter
  }
};
</script>

<style></style>
