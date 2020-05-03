<template>
    <div>
        <h1 class="text-xl">FooVideo: {{ $route.params.id }}</h1>
        <div>Titel: {{ fooVideo.title }}</div>
    </div>
</template>

<script>
	export default {
        async asyncData({params, error, payload}) {
            if(payload) {
                return {
                    fooVideo: payload['fooVideos'][params.id],
                };
            } else {
                const jsonData = require('../modules/dataProvider');
                return {
                    fooVideo: jsonData['fooVideos'][params.id],
                };
            }
        },
	}
</script>

<style scoped>

</style>
