<template>
  <div class="chapter-container"  v-if="books">
    <div class="flex-container">
      <div v-for="(todo, index) in books[data].chapter_ids" :key="index">
        <button class="justify-content mr-2" @click="handleChapterSelect(todo)">{{todo}}</button>
      </div>
      <!-- <button class="justify-content mr-2" @click="handleChapterSelect(chapter_index)">{{books[data].chapter_ids[chapter_index]}}</button> -->
    </div>
    <!-- {{getChapterDetails.length}} -->
    <div v-if="getChapterDetails[PageNo]" class="image-container">
      <button class="button" @click="handlePrev()">Prev</button>
      <img :src="getChapterDetails[PageNo].image.file" alt="" />
      <button class="button" @click="handleNext()">Next</button>
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
      const f = this.books[this.data].chapter_ids[0]
      this.$store.dispatch("mangaModule/getChapterDetails", f)
    }
  },
  methods: {
    handleChapterSelect(cid) {
      this.$store.dispatch("mangaModule/getChapterDetails", cid)
      this.$store.commit("mangaModule/SAVE_CHAPTER_ID", cid)
      // this.$store.commit("mangaModule/SAVE_CHAPTER_LENGTH", this.books[this.data].chapter_ids[cid])
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
      PageNo: function(state) {
        return state.mangaModule.page_no
      },
      ChapterInd: function(state) {
        return state.mangaModule.chapter_index
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
}

.image-container img {
  height: 70vh;
}
.button{
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
}
</style>
    