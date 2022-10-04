const mutation = {
    GET_BOOKS: function (state, payload) {
        state.books = payload;
    },
    GET_BOOK_DETAILS: function (state, payload) {
        state.book = payload
    },
    SAVE_BOOK_INDEX: function(state, payload) {
        state.book_index = payload
    },
    GET_CHAPTER_DETAILS: function (state, payload) {
        state.chapter_details = payload.data.pages
    },
    SAVE_CHAPTER_ID: function(state, chapter_index) {
        state.chapter_index = chapter_index
    },
    SAVE_CHAPTER_LENGTH: function(state, payload) {
        console.log('chapter length', payload)
        state.chapter_length = payload
    },
    UPDATE_PAGE_NO: function(state, pageNo) {
        if((pageNo==1 || pageNo ==-1)) {
            if(state.page_no==-1) state.page_no=0
            if(state.page_no <= state.chapter_details.length) state.page_no += pageNo
            if(state.page_no>state.chapter_details.length) {
                state.book_index += 1
                state.page_no = 0
                // state.chapter_index =state.books.chapter_ids[0]
            }
        }
        else {
            state.page_no = 0
        }
    }
}
export default mutation
