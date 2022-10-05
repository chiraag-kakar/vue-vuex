const mutation = {
    GET_BOOKS: function (state, payload) {
        state.books = payload; // response.data
    },
    GET_BOOK_DETAILS: function (state, payload) {
        state.book = payload // response
    },
    SAVE_BOOK_INDEX: function (state, payload) {
        state.book_index = payload // selected book index
    },
    GET_PAGE_DETAILS: function (state, payload) {
        state.page_details = payload.data.pages // chapter_pages
    },
    SAVE_CHAPTER_ID: function (state, chapter_id) {
        state.chapter_id = chapter_id // chapter_id
    },
    SAVE_CHAPTER_LENGTH: function (state, payload) {
        state.chapter_length = payload // chapter length
    },
    UPDATE_PAGE_NO: function (state, pageNo) {
        if (state.page_no < state.page_details.length - 1) {
            console.log('page_no line 23', pageNo)
            state.page_no += pageNo
            console.log('page_no line 25', state.page_no)
            if (state.page_no == -1) state.page_no = 0
            console.log('page_no line 27', state.page_no)
        }
        else if (state.page_no == state.page_details.length) {
            console.log('page_no line 32', state.page_no)
            console.log(state.chapter_id)
            state.page_no = 0
        }
        // else state.page_no=0
    }
}
export default mutation
