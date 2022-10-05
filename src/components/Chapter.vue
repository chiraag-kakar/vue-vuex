<template>
  <div class="chapter-container" v-if="books">
    <div class="flex-container">
      <div v-for="(todo, index) in books[getBookIndex].chapter_ids" :key="index">
        <button class="justify-content mr-2" @click="handleChapterSelect(todo)">{{todo}}</button>
      </div>
    </div>
    <div v-if="getChapterDetails[PageNo]" class="image-container">
      <button class="button-prev" @click="handlePrev()"></button>
      <img :src="getChapterDetails[PageNo].image.file" alt="" />
      <button class="button-next" @click="handleNext()"></button>
    </div>
    <div v-if="getChapterDetails[PageNo]">{{(getChapterDetails[PageNo].page_index)+1}}/{{getChapterDetails.length}}
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import { defineComponent } from 'vue';
export default defineComponent({
  name: "ChapterComponent",
  props: ['data'],
  setup() {
  },
  beforeMount() {
    if (this.books) {
      const f = this.books[this.getBookIndex].chapter_ids[0]
      this.$store.dispatch("mangaModule/getChapterDetails", f)
    }
    this.$store.dispatch("mangaModule/getBookDetails", (this.getBookIndex + 1))
  },
  methods: {
    handleChapterSelect(cid) {
      this.$store.dispatch("mangaModule/getChapterDetails", cid)
    },
    handleNext() {
      this.$store.dispatch("mangaModule/setPageNo", 1)
    },
    handlePrev() {
      this.$store.dispatch("mangaModule/setPageNo", -1)
    }
  },
  computed: {
    ...mapState({
      books: function (state) {
        return state.mangaModule.books
      },
      getChapterDetails: function (state) {
        return state.mangaModule.chapter_details
      },
      PageNo: function (state) {
        console.log('Page No', state.mangaModule.page_no)
        return state.mangaModule.page_no
      },
      ChapterId: function (state) {
        return state.mangaModule.chapter_id
      },
      getBookIndex: function (state) {
        return state.mangaModule.book_index
      },
      getChapterIndex: function (state) {
        return state.mangaModule.chapter_id
      }
    })
  },
  watch: {
    PageNo: {
      handler: function (newValue) {
        console.log('PageNo', newValue)
      },
      deep: true,
      immediate: true
    },
    books: {
      handler: function (newValue) {
        console.log('books', newValue)
      },
      deep: true,
      immediate: true
    },
    getChapterDetails: {
      handler: function (newValue) {
        console.log('getChapterDetails', newValue)
      },
      deep: true,
      immediate: true
    },
  }
})
</script>
    
<style scoped>
.flex-container {
  display: flex;
  justify-content: center;
  /* background-color: green; */
}

.chapter-container {
  display: flex;
  flex-flow: column wrap;
  align-items: center;
}

.image-container {
  flex: 1;
  display: flex;
  position: relative;
}

.image-container img {
  height: 70vh;
}

.button-prev {
  display: flex;
  justify-content: center;
  /* align-items: center; */
  left: 0;
  flex: 1;
  position: absolute;
  height: 100vh;
  width: 20vh;
  background-color: transparent;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
}

.button-next {
  display: flex;
  justify-content: center;
  /* align-items: center; */
  right: 0;
  flex: 1;
  position: absolute;
  height: 100vh;
  width: 20vh;
  background-color: transparent;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
}
</style>
    