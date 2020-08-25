<template>
    <div>

        <input type="search" v-model="query" @input="$fetch" class="bg-purple-white shadow rounded border-0 p-3 w-full" placeholder="Search fooBase..." />


        <div v-if="query" class="searchResult container rounded p-5 h-full">
            <foo-video-list :foo-videos="fooVideos"></foo-video-list>
        </div>
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
    .searchResult {
        position: absolute;
        background-color: white;
    }
</style>
