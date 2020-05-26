<template>
    <div>
        <h1 class="title text-2xl font-bold text-gray-800 my-4">
            Welcome to fooBase
        </h1>
        <h2>
            Latest additions:
        </h2>
        <foo-video-list :foo-videos="fooVideos"></foo-video-list>
    </div>
</template>

<script>
    import FooVideoList from "../components/FooVideoList";

    export default {
        components: {
            FooVideoList
        },
        async asyncData({ $content }) {
            const fooVideos = await $content('fooVideos').sortBy('date', 'desc').limit(8).fetch()

            return {
                fooVideos
            }
        },
    }
</script>

<style>
    /* Sample `apply` at-rules with Tailwind CSS
    .container {
      @apply min-h-screen flex justify-center items-center text-center mx-auto;
    }
    */
</style>
