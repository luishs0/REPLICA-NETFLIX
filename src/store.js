import { reactive } from "vue";

export const store = reactive({
    apiMovieUrl: 'https://api.themoviedb.org/3/search/movie',
    apiSerieUrl: 'https://api.themoviedb.org/3/search/tv',
    apiKey: '6223b1513798df7695a15a55fdb90a87',
    inputSearch: '',
    optionValue: '',
    genre: [],
    filterGenre: [],
    moviesArray: [],
    seriesArray: [],
    loading: false,
})