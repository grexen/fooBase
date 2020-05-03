<template>
    <div>

        <h1 class="text-xl">FooVideo: {{ $route.params.id }}</h1>
        <div>Titel: {{ fooVideo.Title }}</div>
    </div>
</template>

<script>
	export default {
		name: "_id.vue",

        async asyncData({params, error, payload, $axios}) {
            if(payload) {
                return {fooVideos: payload};
            } else {
                const response = await $axios.$get(`http://localhost:8080/api/collections/get/FooVideos?filter[_id]=${params.id}&token=c33f9825f4ac2f443bfcc70abc6cec`);
                return {fooVideo: response.entries[0]};
            }
        },
	}
</script>

<style scoped>

</style>
