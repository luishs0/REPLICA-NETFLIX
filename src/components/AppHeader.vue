<script>
import { store } from '../store'
export default {
    name: 'AppSearch',
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <header class="d-flex justify-content-between py-3 px-4 bg-black">

        <!-- logo -->
        <div class="logo">
            <img src="https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="">
        </div>

        <!-- form -->
        <div class="ms_form">
            <label class="d-none" for="search-bar">Search movie or serie</label>
            <input id="search-bar" placeholder="type a movie/serie name" type="text"
                @keyup.enter="$emit('clickedButton')" v-model="store.inputSearch">
            <button @click="$emit('clickedButton')">Search</button>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.logo {
    img {
        width: 140px;
    }
}

.ms_form {
    button {
        background-color: #c91723;
        height: 34px;
        color: white;
        border-radius: 5px;
    }
}
</style>