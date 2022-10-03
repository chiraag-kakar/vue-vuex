function state() {
    return {
        bookList: {
            books: [],
        },
        index1: 0,
        chapterid_map: {
            current_id: 0,
            chapter_id_arr: []
        },
        chapter_index: 0,
        book_index: 0,
        chapter_details:{}
    }
}

export default state
