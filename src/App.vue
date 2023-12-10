<script>
import axios from 'axios'
import { store } from './store'
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
export default {
  data() {
    return {
      store,
    }
  },
  created() {
    
  },
  methods: {
    getGenreApi() {
      axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=6223b1513798df7695a15a55fdb90a87')
        .then((resp) => {
          for (let i = 0; i < resp.data.genres.length; i++) {
            const genre = resp.data.genres[i];
            for (let j = 0; j < this.store.moviesArray.length; j++) {
              const movie = store.moviesArray[j]
              if ((movie.genre_ids).includes(genre.id) && !this.store.genre.find((item) => item.id === genre.id)) {
                this.store.genre.push(genre);
              }
            }
          }
        })
    },

    getMovies() {
      const params = {
        api_key: this.store.apiKey,
        ...this.store.inputSearch !== "" && { query: this.store.inputSearch }
      }
      axios.get(this.store.apiMovieUrl, {
        params: params
      }).then((resp) => {
        this.store.moviesArray = resp.data.results;
      }).catch((error) => {
        console.log(error);
      })
    },

    getSeries() {
      const params = {
        api_key: this.store.apiKey,
        ...this.store.inputSearch !== "" && { query: this.store.inputSearch }
      }
      axios.get(this.store.apiSerieUrl, {
        params: params
      }).then((resp) => {
        this.store.seriesArray = resp.data.results;
      }).catch((error) => {
        console.log(error);
      }).finally(() => {
        this.store.loading = false;
        this.getGenreApi()
      })
    },

    getAxiosApi() {
      this.store.loading = true;

      this.getMovies()
      this.getSeries()
      this.store.inputSearch = "";
    }
  },
  components: {
    AppHeader,
    AppMain,
  }
}
</script>

<template>
  <AppHeader @clickedButton="getAxiosApi" />
  <AppMain />
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>