import apiClient from "../../http-common";
const actions = {
    getBooks: async function (ctx) {
        try {
            let response = await apiClient.get('books/')
            ctx.commit("GET_BOOKS_SUCCESS", { books: response });
        } catch (error) {
            console.log(error)
        }
    },
    getBookDetails: async function (ctx, bookId) {
        let response = await apiClient.get(`books/${bookId}/`)
        ctx.commit("GET_BOOK_DETAILS", { books: response });
    },
    getChapterDetails: async function (ctx, chapterId) {
        console.log('getChapterDetails Action', chapterId)
        let response = await apiClient.get(`chapters/${chapterId}/`)
        console.log('getChapterDetails Response', response)
        ctx.commit("GET_CHAPTER_DETAILS", response);
    }
}

export default actions
