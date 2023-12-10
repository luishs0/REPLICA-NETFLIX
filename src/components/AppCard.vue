<script>
export default {
    name: 'MovieCard',
    props: {
        movieItem: Object,
        name: String,
        originalName: String
    },
    data() {
        return {
            language: ['it', 'en']
        }
    },
    methods: {
        getImg(url) {
            return new URL(`../assets/` + url, import.meta.url).href;
        }
    },
    computed: {
        getStar() {
            return Math.ceil(this.movieItem.vote_average / 2)
        }
    }
}
</script>

<template>
    <div class="ms_card">
        <div class="ms_card-inner">
            <ul class="ms_card-description p-3">

                <!-- title -->
                <li>
                    <span class="text-style">Title:</span>
                    {{ name }}
                </li>

                <!-- original title -->
                <li>
                    <span class="text-style">Original Title:</span>
                    {{ originalName }}
                </li>

                <!-- image country -->
                <li v-if="language.includes(movieItem.original_language)">
                    <span class="text-style">Original Language:</span>
                    <img :src="getImg(movieItem.original_language + `.jpg`)" alt="">
                </li>
                <li v-else>
                    <span class="text-style">Original Language:</span>
                    {{ movieItem.original_language }}
                </li>

                <!-- rate star icon -->
                <li>
                    <span class="text-style">Rate:</span>
                    <i v-for="n in 5" :class="n <= getStar ? 'fa-solid' : 'fa-regular'" class="fa-star"></i>
                </li>

                <!-- Description -->
                <li>
                    <span class="text-style">Description:</span> {{ movieItem.overview }}
                </li>
            </ul>

            <!-- image film -->
            <div v-if="movieItem.poster_path" class="ms_card-image">
                <img :src="'https://image.tmdb.org/t/p/w342' + movieItem.poster_path" alt="">
            </div>
            <div class="no-img" v-else>
                <p>no pic</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.ms_card {
    position: relative;
    height: 100%;
    perspective: 1000px;

    .no-img {
        height: 342px;
    }
}

.ms_card-inner {
    transition: transform 0.6s;
    transform-style: preserve-3d;

    .text-style {
        text-decoration: underline;
        margin-right: 0.5rem;
        font-size: 1.1rem;
    }
}

.ms_card:hover .ms_card-inner {
    transform: rotateY(180deg);
}

.ms_card-description {
    position: absolute;
    top: 0;
    left: 0;
    transform: rotateY(180deg);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    background-color: rgb(44, 44, 44);
    height: 100%;
    overflow: auto;
    list-style-type: none;

    li {
        margin-bottom: 0.5rem;
    }

    img {
        width: 30px;
    }
}

.ms_card-image {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}
</style>