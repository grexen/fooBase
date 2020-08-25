<template>
    <div>
        <h1 class="title text-2xl font-bold text-gray-800 my-4">
            Welcome to fooBase
        </h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-5">
            <multi-search></multi-search>
            <user-button></user-button>
        </div>



        <hr />
        <h2 class="py-5">
            Latest additions:
        </h2>
        <foo-video-list :foo-videos="fooVideos"></foo-video-list>
    </div>
</template>

<script>
    import FooVideoList from "../components/FooVideoList";
    import MultiSearch from "../components/MultiSearch";
    import UserButton from "../components/UserButton";

    export default {
        components: {
            UserButton,
            MultiSearch,
            FooVideoList
        },



        async asyncData({ $content }) {
            const fooVideos = await $content('fooVideos').sortBy('date', 'desc').limit(24).fetch()

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
