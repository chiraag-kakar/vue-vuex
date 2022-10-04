<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-success">Manga Viewer</p>
        <p class="fst-italic"></p>
      </div>
    </div>
  </div>
  <div class="flex-container" v-if="books">
    <div v-for="(todo, index) in books" :key="index">
      <button class="justify-content mr-2" @click="handleBookSelect(index)">{{todo.title}}</button>
    </div>
  </div>
  <Chapter v-if="books[selectedBookInd]" :data="selectedBookInd" />
</template>
  
<script>
// import { mapGetters } from "vuex";
import { mapState } from 'vuex';
import { defineComponent } from 'vue';
import Chapter from './Chapter.vue'
export default defineComponent({
  name: "MangaComponent",
  components: { Chapter },
  beforeMount() {
    console.log('beforemount manag')
    this.$store.dispatch("mangaModule/getBooks")
  },
  setup() {
    return {
      selectedBookInd: 0
    }
  },
  methods: {
    handleBookSelect(index) {
      this.selectedBookInd = index
      this.$store.commit("mangaModule/SAVE_BOOK_INDEX", index)
      this.$store.dispatch("mangaModule/getChapterDetails", this.books[index].chapter_ids[0])
    }
  },
  // computed: {
  //   ...mapGetters({
  //   datas: "getMangaState"
  // })
  // }
  computed: {
    ...mapState({
      books: function (state) {
        return state.mangaModule.books
      }
    })
  }
})
</script>
  
<style scoped>
.flex-container {
  display: flex;
  justify-content: center;
  padding: 1rem;
  /* background-color: green; */
}
</style>
  