<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-success">Lorem Ipsum Dormet</p>
        <p class="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias aliquam aliquid aperiam
          dignissimos dolor
          doloribus dolorum est facere ipsam, laborum molestiae molestias numquam, quis tempore ut, veritatis voluptates
          voluptatum.</p>
      </div>
    </div>
  </div>
  {{books}}
  <div class="flex-container">
    <div v-for="(todo1, index1) in books" :key="index1">
      <button class="justify-content mr-2" @click="method(index1)">{{todo1.title}}</button>
    </div>
  </div>
  <div class="flex-container">
    <Chapter :data="getBookIndex" />
  </div>

</template>
  
<script>
// import { mapGetters } from "vuex";
import { mapState } from 'vuex';
import { ref, defineComponent } from 'vue';
import Chapter from './Chapter.vue'
export default defineComponent({
  name: "MangaComponent",
  components: { Chapter },
  beforeMount() {
    this.$store.dispatch("mangaModule/getBooks")
  },
  setup() {
    return {
      c: '',
      d: {},
      e: {},
      current: ref(3),
    }
  },
  methods: {
    method(index) {
      this.$store.commit("mangaModule/SAVE_BOOK_INDEX", index)
      const c = this.books[index]
      const d = c.chapter_ids
      this.$router.push('/manga');
      return d
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
        const c = state
        const d = JSON.parse(JSON.stringify(c))
        const e = d.mangaModule.bookList.books.data
        if(e) return e
        else return []
      },
      getBookIndex: function (state) {
        const c = state
        const d = JSON.parse(JSON.stringify(c))
        if(d) return d.mangaModule.index1
        else return 0
      }
    })
  }
})
</script>
  
<style scoped>
.flex-container {
  display: flex;
  justify-content: center;
  /* background-color: green; */
}
</style>
  