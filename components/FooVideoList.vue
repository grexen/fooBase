<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <article v-for="(fooVideo, fooVideoKey) in fooVideos" :key="fooVideoKey" class="rounded-lg overflow-hidden shadow-lg h-full hover:shadow-2xl">
            <a :href="fooVideoKey">
                <img alt="Placeholder" class="block h-auto w-full" :src="getYoutubeImageUrl(fooVideo)">
            </a>
            <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 class="font-semibold text-gray-700">
                    <a class="no-underline" :href="fooVideo.Link" target="_blank">
                        {{ fooVideo.title }}
                    </a>
                </h1>
            </header>
            <p class="p-2 md:p-4 text-sm">
                by {{ fooVideo.artist }}
            </p>
            <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                        {{ fooVideo.fooPlayer }}
                    </span>
            </footer>
        </article>
    </div>
</template>

<script>
    export default {
        name: "FooVideoList",
        props: {
            fooVideos: Object
        },

        data() {
            return {
                youTubeImageUrl: 'https://via.placeholder.com/300x200'

            }
        },

        methods: {

            getArtist(fooVideo) {
                let artist = 'unknown';
                if(fooVideo.Artists) {
                    artist = fooVideo.Artists[0].display;
                }
                return artist;
            },
            getYoutubeImageUrl(fooVideo) {
                if(fooVideo.youTubeId) {
                    return `https://img.youtube.com/vi/${fooVideo.youTubeId}/0.jpg`;
                } else {
                    return 'https://via.placeholder.com/400x300'
                }
            }
        }
    }
</script>

<style scoped>

</style>
