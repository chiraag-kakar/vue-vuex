<template>
  <div class="flex-container">
    <div v-for="(todo2, index2) in books[data].chapter_ids" :key="index2">
      <button class="justify-content mr-2" @click="method(todo2)">{{todo2}}</button>
    </div>
  </div>
  {{getChapterDetails.data.book}}
</template>   
<script>
import { mapState } from 'vuex';
import { defineComponent } from 'vue';
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
  methods: {
    method(cid) {
      this.$store.dispatch("mangaModule/getChapterDetails", cid)
    }

  },
  computed: {
    ...mapState({
      datas: function (state) {
        const c = state
        const d = JSON.parse(JSON.stringify(c))
        const e = d.mangaModule.bookList
        return e
      },
      books: function (state) {
        const c = state
        const d = JSON.parse(JSON.stringify(c))
        const e = d.mangaModule.bookList.books.data
        return e
      },
      getChapterDetails: function (state) {
          const c = state
          const d = JSON.parse(JSON.stringify(c))
          const e = d.mangaModule.chapter_details
          if(e) return e
          else return {}
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
    