<template>
  <div class="flex-container" v-if="books">
    <div v-for="(todo, index) in books" :key="index">
      <button class="justify-content mr-2" @click="handleBookSelect(index)">{{todo.title}}</button>
    </div>
  </div>
  <Chapter v-if="books[bookIndex]" :data="bookIndex" />
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
    this.$store.dispatch("mangaModule/getBooks")
  },
  setup() {
    return {
      selectedBookInd: 0
    }
  },
  methods: {
    handleBookSelect(index) {
      this.$store.commit("mangaModule/SAVE_BOOK_INDEX", index)
      this.$store.commit("mangaModule/UPDATE_PAGE_NO", 0)
      this.$store.dispatch("mangaModule/getPageDetails", this.books[index].chapter_ids[0])
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
      },
      bookIndex: function (state) {
        return state.mangaModule.book_index
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
  