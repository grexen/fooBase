<template>
    <div class="fooVideo-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <foo-video-card v-for="(fooVideo, fooVideoKey) in fooVideos" :key="fooVideoKey" :foo-video="fooVideo">
        </foo-video-card>
    </div>
</template>

<script>
    import FooVideoCard from "./FooVideoCard";

    export default {
        name: "FooVideoList",
        components: {FooVideoCard},
        props: {
            fooVideos: Array
        }
    }
</script>

<style scoped>
    .fooVideo-list {
        @apply gap-4 pb-5
    }


</style>
