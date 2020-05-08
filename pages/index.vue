<template>
    <div>
        <h1 class="title text-2xl font-bold text-gray-800 my-4">
            Welcome to fooBase
        </h1>
        <foo-video-list :foo-videos="fooVideos"></foo-video-list>
    </div>
</template>

<script>
    import FooVideoList from "../components/FooVideoList";

    export default {
        components: {
            FooVideoList
        },
        async asyncData({params, error, payload}) {
            if(payload) {
                return {
                    fooVideos: payload['fooVideos'],
                    fooPlayer: payload['fooPlayers']
                };
            } else {
                const dataProvider = require('../modules/dataProvider');
                return {
                    fooVideos: dataProvider.getCollections()['fooVideos'],
                    fooPlayers: dataProvider.getCollections()['fooPlayers']
                };
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
