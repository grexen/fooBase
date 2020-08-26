<template>
    <div class="md:col-end-5 flex items-center md:justify-end">
        <client-only>
            <div class="relative w-full md:w-auto" v-if="fetchedUser">
                <button v-on:click="hideUserMenu = !hideUserMenu" class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded w-full">
                    <span class="mr-1">Hi</span><span class="font-bold">{{ fetchedUser.user_metadata.full_name }}</span>
                </button>
                <div v-bind:class="{ hidden: hideUserMenu }" id="userMenu" class="origin-top-right md:absolute right-0 mt-2 w-56 rounded-md shadow-lg">
                    <ul class="rounded-md bg-white shadow-xs p-2">
                        <li><a href="/admin/index.html">admin</a></li>
                        <li><nuxt-link to="profile">profile</nuxt-link></li>
                        <li>
                            <button onclick="netlifyIdentity.open()" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded">
                                Logout
                            </button>
                        </li>
                    </ul>

                </div>
            </div>
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
                fetchedUser: '',
                hideUserMenu: true
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
