<template>
    <div>
        <h1 class="text-xl">FooVideo: {{ $route.params.id }}</h1>
        <div class="pb-2">Titel: {{ fooVideo.attributes.title }}</div>

        <nuxt-link to="/" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-block">
            go back
        </nuxt-link>

        <a :href="fooVideo.attributes.youTubeLink" target="_blank" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block">
            watch
        </a>
    </div>
</template>

<script>
	export default {
        async asyncData({params, error, payload}) {
            if(payload) {
                return {
                    fooVideo: payload,
                };
            } else {
                const dataProvider = require('../modules/dataProvider');
                return {
                    fooVideo: dataProvider.getFooVideoBySlug(params.id)
                };
            }
        },
	}
</script>

<style scoped>

</style>
