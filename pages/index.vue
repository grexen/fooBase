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
        async asyncData({params, error, payload, $axios}) {
            if(payload) {
                return {fooVideos: payload};
            } else {
                const response = await $axios.$get('http://localhost:8080/api/collections/get/FooVideos?token=c33f9825f4ac2f443bfcc70abc6cec');
                return {fooVideos: response.entries};
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
