<template>
  <div class="flex-container" v-if="books">
    <div v-for="(todo2, index2) in books[data].chapter_ids" :key="index2">
      <button class="justify-content mr-2" @click="method(todo2)">{{todo2}}</button>
    </div>
  </div>
  <div class="flex-container" v-for="(x,y) in getChapterDetails" :key="y">
    <div class="row">
      <img :src="x.image.file" alt="" />
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import { defineComponent } from 'vue';
import 'vue3-carousel/dist/carousel.css';
export default defineComponent({
  name: "ChapterComponent",
  props: ['data'],
  setup() {
    return {
      c: '',
      d: {},
      e: {},
    }
  },
  async beforeMount() {
    console.log('before')
    if (this.books) {
      const f = this.books[this.data].chapter_ids[0]
      await this.$store.dispatch("mangaModule/getChapterDetails", f)
    }
  },
  methods: {
    async method(cid) {
      await this.$store.dispatch("mangaModule/getChapterDetails", cid)
    }

  },
  computed: {
    ...mapState({
      books: function (state) {
        const c = state
        const d = JSON.parse(JSON.stringify(c))
        const e = d.mangaModule.bookList.books.data
        return e
      },
      getChapterDetails: function (state) {
        const c = state
        const d = JSON.parse(JSON.stringify(c))
        if (d.mangaModule.chapter_details.data) {
          const e = d.mangaModule.chapter_details.data.pages
          if (e) return e
        } else {
          return []
        }
        return []
      }
    })
  },
})
</script>
    
<style scoped>
.flex-container {
  display: flex;
  justify-content: center;
  /* background-color: green; */
}
</style>
    