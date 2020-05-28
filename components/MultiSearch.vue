<template>
    <div class="pb-6">

        <div class="relative mr-6 my-2">
            <input type="search" v-model="query" @input="$fetch" class="bg-purple-white shadow rounded border-0 p-3" placeholder="Search fooBase..." />
        </div>

        <foo-video-list v-if="query" :foo-videos="fooVideos"></foo-video-list>
    </div>

</template>

<script>
    import FooVideoList from "./FooVideoList";
    export default {
        name: "MultiSearch",
        components: {FooVideoList},
        data() {
            return {
                fooVideos: [],
                query: ''
            }
        },

        async fetch() {
            this.fooVideos = await this.$content('fooVideos').search(this.query).fetch()
        },
    }

</script>

<style scoped>

</style>
