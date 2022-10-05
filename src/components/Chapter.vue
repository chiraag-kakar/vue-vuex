<template>
  <div class="chapter-container" v-if="books">
    <div class="flex-container">
      <div v-for="(todo, index) in books[getBookIndex].chapter_ids" :key="index">
        <button class="justify-content mr-2" @click="handleChapterSelect(todo)">{{todo}}</button>
      </div>
    </div>
    <div class="flex-container"></div>
    <div v-if="getPageDetails[PageNo]" class="image-container">
      <button class="button-prev" @click="handlePrev()"></button>
      <img :src="getPageDetails[PageNo].image.file" alt="" />
      <button class="button-next" @click="handleNext()"></button>
    </div>
    <div v-if="getPageDetails[PageNo]">{{(getPageDetails[PageNo].page_index)+1}}/{{getPageDetails.length}}
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
      this.$store.dispatch("mangaModule/getPageDetails", f)
    }
    this.$store.dispatch("mangaModule/getBookDetails", (this.getBookIndex + 1))
  },
  methods: {
    handleChapterSelect(cid) {
      console.log('cid', cid)
      this.$store.commit("mangaModule/UPDATE_PAGE_NO", 0)
      this.$store.commit("mangaModule/SAVE_CHAPTER_ID", cid)
      this.$store.dispatch("mangaModule/getPageDetails", cid)
    },
    handleNext() {
      this.$store.dispatch("mangaModule/setPageNo", 1, this.getBookDetails)
    },
    handlePrev() {
      this.$store.dispatch("mangaModule/setPageNo", -1, this.getBookDetails)
    }
  },
  computed: {
    ...mapState({
      books: function (state) {
        return state.mangaModule.books
      },
      getPageDetails: function (state) {
        return state.mangaModule.page_details
      },
      PageNo: function (state) {
        console.log('Page No', state.mangaModule.page_no)
        return state.mangaModule.page_no
      },
      getBookIndex: function (state) {
        return state.mangaModule.book_index
      },
      getBookDetails : function(state) {
        return state.mangaModule.book
      }
    })
  },
  watch: {
    // PageNo: {
    //   handler: function (newValue) {
    //     console.log('PageNo', newValue)
    //   },
    //   deep: true,
    //   immediate: true
    // }
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
    