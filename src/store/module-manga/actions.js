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
    getPageDetails: async function (ctx, chapterId) {
        apiClient.get(`chapters/${chapterId}/`).then(response => {
            ctx.commit("GET_PAGE_DETAILS", response)
    })
    },
    setPageNo: function (ctx, pageNo, getBookDetails) {
        ctx.commit("UPDATE_PAGE_NO", pageNo, getBookDetails)
    } 
}

export default actions
