<template>
    <div class="md:col-end-5 flex items-center md:justify-end">
        <client-only>
            <template v-if="fetchedUser">
                <div class="">Hi {{ fetchedUser.user_metadata.full_name }}</div>
                <button onclick="netlifyIdentity.logout()" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded ml-auto md:ml-2">
                    Logout
                </button>

            </template>
            <button v-else onclick="netlifyIdentity.open()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full md:w-auto">
                Login
            </button>
        </client-only>
    </div>
</template>

<script>
    import { getTheUser } from "../modules/authProvider";

    export default {
        name: "UserButton",

        data() {
            return {
                fetchedUser: ''
            }
        },

        async fetch () {
            this.fetchedUser = await getTheUser();
        },
        fetchOnServer: false
    }

</script>

<style scoped>


</style>
