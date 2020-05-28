<template>
    <nuxt-link :to="{ name: 'id', params: { id: fooVideo.slug }}">
        <article class="rounded-lg overflow-hidden shadow-lg h-full hover:shadow-2xl">
            <img alt="Placeholder" class="block h-auto w-full" :src="imgUrl">
            <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 class="font-semibold text-gray-700">
                    {{ fooVideo.title }}
                </h1>
            </header>
            <p class="p-2 md:p-4 text-sm">
                by {{ fooVideo.fooArtist }}
            </p>
            <footer class="flex items-center justify-between leading-none p-2 md:p-4">
            <nuxt-link :to="{ name: 'fooplayers-playerName', params: { playerName: fooVideo.fooPlayer }}" class="inline-block bg-gray-200 hover:bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                {{ fooVideo.fooPlayer }}
            </nuxt-link>
            </footer>
        </article>
    </nuxt-link>
</template>

<script>
    export default {
        name: "FooVideoCard",
        props: {
            fooVideo: Object
        },

        computed: {
            imgUrl () {
                const regex = /http.*\?v=(.*)/;
                const match = regex.exec(this.fooVideo.youTubeLink);
                return `https://img.youtube.com/vi/${match[1] || ''}/0.jpg`;
            }
        },
    }
</script>

<style scoped>

</style>
