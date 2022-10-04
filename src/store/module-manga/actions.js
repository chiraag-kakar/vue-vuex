import apiClient from "../../http-common";
const actions = {
    getBooks: async function (ctx) {
        // return new Promise(resolve=> {
            apiClient.get('books/').then(response => {
                ctx.commit("GET_BOOKS", response.data)
                // resolve(response)
        })
        // })
    },
    getBookDetails: async function (ctx, bookId) {
        apiClient.get(`books/${bookId}/`).then(response => {
            ctx.commit("GET_BOOK_DETAILS", response)
    })
    },
    getChapterDetails: async function (ctx, chapterId) {
        apiClient.get(`chapters/${chapterId}/`).then(response => {
            ctx.commit("SAVE_CHAPTER_ID", chapterId)
            ctx.commit("GET_CHAPTER_DETAILS", response)
    })
    },
    setPageNo: function (ctx, pageNo, chapterLength) {
        ctx.commit("UPDATE_PAGE_NO", pageNo, chapterLength)
    } 
}

export default actions
