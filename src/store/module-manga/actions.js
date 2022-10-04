import apiClient from "../../http-common";
const actions = {
    getBooks: async function (ctx) {
        console.log('getting books')
        // return new Promise(resolve=> {
            apiClient.get('books/').then(response => {
                ctx.commit("GET_BOOKS", response.data)
                // resolve(response)
        })
        // })
    },
    getBookDetails: async function (ctx, bookId) {
        let response = await apiClient.get(`books/${bookId}/`)
        ctx.commit("GET_BOOK_DETAILS", response);
    },
    getChapterDetails: async function (ctx, chapterId) {
        apiClient.get(`chapters/${chapterId}/`).then(response => {
            ctx.commit("GET_CHAPTER_DETAILS", response)
    })
    },
    setPageNo: function (ctx, pageNo) {
        console.log(pageNo, 'action set page no')
        ctx.commit("UPDATE_PAGE_NO", pageNo)
    } 
}

export default actions
