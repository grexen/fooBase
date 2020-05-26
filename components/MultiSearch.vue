<template>
    <div class="pb-6">

        <div class="relative mr-6 my-2">
            <input type="search" v-model="query" @input="$fetch" class="bg-purple-white shadow rounded border-0 p-3" placeholder="Search fooBase...">
        </div>

        <pre v-if="query">{{ searchResult }}</pre>
    </div>

</template>

<script>
    export default {
        name: "MultiSearch",

        data() {
            return {
                searchResult: [],
                query: ''
            }
        },

        async fetch() {
            this.searchResult = await this.$content('fooArtists').search(this.query).fetch()
        },
    }

</script>

<style scoped>

</style>
