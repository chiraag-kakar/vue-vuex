const mutation = {
    GET_BOOKS_SUCCESS: function (state, payload) {
        state.bookList.books = payload.books;
    },
    GET_BOOK_DETAILS: function (state, payload) {
        console.log('payload_book', payload)
    },
    GET_CHAPTER_DETAILS: function (state, payload) {
        state.chapter_details = payload
    },
    SAVE_CHAPTER_ID: function(state, chapter_index) {
        state.chapter_index = chapter_index
    },
    SAVE_BOOK_INDEX: function(state, payload) {
        state.index1 = payload
    }
}
export default mutation
