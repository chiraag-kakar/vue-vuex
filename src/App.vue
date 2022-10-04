<template>
  <NavBar/>
  <!-- <router-view/> -->
  <Manga/>
</template>

<style>
@import "styles.css";
</style>
<script>
import NavBar from "@/components/NavBar";
import Manga from "./components/Manga.vue";

export default {
  components: { NavBar, Manga }
}
</script>
