<script>
import AppCard from './AppCard.vue';
import InitialScreen from './InitialScreen.vue';
import { store } from '../store'
export default {
    name: 'AppMain',
    data() {
        return {
            store,
        }
    },
    methods: {

    },
    components: {
        AppCard,
        InitialScreen,
    }
}
</script>

<template>
    <main class="bg-dark">
        <div v-if="store.moviesArray.length !== 0 || store.seriesArray.length !== 0"
            class="container-fluid p-5">

            <!-- movie section  -->
            <h2 class="text-white p-2">Movies</h2>
            <select class="mb-2" name="" v-model="store.optionValue" id="">
                <option value="">Selec Genre</option>
                <option v-for="item in store.genre" :value="item.id"> {{ item.name }}</option>
            </select>

            <div class="row row-cols-2 row-cols-md-3 row-cols-lg-5 text-white g-3 mb-5">
                <div class="col" v-for="(item, index) in store.moviesArray"
                    v-show="(item.genre_ids).includes(store.optionValue) || store.optionValue === ''" :key="index">
                    <AppCard :name="item.title" :original-name="item.original_title" :movieItem="item" />
                </div>
            </div>

            <!-- serie section  -->
            <h2 class="text-white p-2">Series:</h2>
            <div class="row row-cols-2 row-cols-md-3 row-cols-lg-5 text-white g-3">

                <div class="col" v-for="(item, index) in store.seriesArray" :key="index"  v-show="(item.genre_ids).includes(store.optionValue) || store.optionValue === ''">
                    <AppCard :name="item.name" :original-name="item.original_name" :movieItem="item" />
                </div>
            </div>
        </div>

        <div v-else>
            <InitialScreen />
        </div>
    </main>
</template>

<style lang="scss" scoped>
main {
    width: 100%;
    height: calc(100vh - 70px);
    overflow: auto;
}
</style>