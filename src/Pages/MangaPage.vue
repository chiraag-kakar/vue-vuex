<template>
    <Manga/>
    <Chapter/>
  </template>
  
  <script>
  // @ is an alias to /src
  import Manga from '../components/Manga.vue'
  import Chapter from '../components/Chapter.vue'
  export default {
    name: 'MangaPage',
    components: { Manga , Chapter }
  }
  </script>
  