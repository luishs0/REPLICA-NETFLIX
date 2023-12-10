<script>
import { store } from '../store'
export default {
    name: 'InitialScreen',
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <div class="initial-screen">
        <!-- initial status -->
        <h2 v-if="store.loading === false" class="d-flex justify-content-center">Search a title</h2>

        <!-- loader -->
        <div v-else class=" loading d-flex justify-content-center align-items-center">
            <div class="loader"></div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
.initial-screen {
    height: calc(100vh - 70px);
    background-color: rgb(29, 29, 29);
    color: white;
}

.loading {
    height: 100%;

    .loader {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        border-top: 8px solid rgba(255, 255, 255, 1);
        border-left: 8px solid rgba(255, 255, 255, 1);
        border-right: 8px solid rgba(255, 255, 255, 0);

        animation: spin 0.5s infinite linear;
    }
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}
</style>