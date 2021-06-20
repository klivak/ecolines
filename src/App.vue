<template>
  <div id="app">
    <the-header></the-header>

    <main class="main">
      <router-view />
    </main>

    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader";
import TheFooter from "./components/TheFooter";

export default {
  components: {TheFooter, TheHeader},
};
</script>

<style scoped lang="scss"></style>
