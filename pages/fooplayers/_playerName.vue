<template>
    <div>
        <h1 class="text-xl">{{ $route.params.playerName }}</h1>

        <h2 class="pb-2">{{fooPlayer.fullName}}</h2>


        <h2>FooVideos:</h2>

        <foo-video-list :foo-videos="fooVideos"></foo-video-list>

        <nuxt-link to="/" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-block">
            go back
        </nuxt-link>

    </div>
</template>

<script>
    import FooVideoList from "../../components/FooVideoList";

    export default {
        components: {
            FooVideoList
        },

        async asyncData({ params, $content }) {
            const fooPlayer = await  $content('fooPlayers', params.playerName).fetch()
            const fooVideos = await $content('fooVideos').where(({ fooPlayer: { $eq: params.playerName } })).fetch()
            return {
                fooPlayer,
                fooVideos
            }
        },
    }
</script>

<style scoped>

</style>
