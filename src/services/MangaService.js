import http from '../http-common';

const getBooks = () => {
    return http.get('/books/');
};

const getBookDetails = (bookId) => {
    return http.get(`/books/${bookId}/`);
};

const getChapterDetails = (chapterId) => {
    return http.get(`/chapters/${chapterId}/`);
};

const MangaService = {
    getBooks,
    getBookDetails,
    getChapterDetails,
};

export default MangaService;
