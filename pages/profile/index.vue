<template>
    <div>
        <h1>profile</h1>

        <client-only>
            <template v-if="fetchedUser">
                <div>Hi {{ fetchedUser.user_metadata.full_name }}</div>
                <button onclick="netlifyIdentity.logout()">Logout</button>
            </template>
            <button v-else onclick="netlifyIdentity.open()">
                Login
            </button>
            <div>

                <h2>fetchedUser</h2>
                <pre>
                    {{ fetchedUser }}
                </pre>
            </div>
        </client-only>


        <button onclick="netlifyIdentity.open()">Login</button>
        <button @click="setCurrentUser()">Log current user</button>
        <button @click="logSth">Log sth</button>
    </div>

</template>

<script>
    //import netlifyIdentity from 'netlify-identity-widget';
    import { GET, getTheUser } from "../../modules/authProvider";

    export default {
        name: "index.vue",

        data() {
            return {
                currentUser2: '',
                fetchedUser: ''
            }
        },

        async fetch () {
            //console.log('fetching...')
            //const data = await GET('/getData');
            //console.log('data in fetch: ', data)

            const theUser = await getTheUser();

            //console.log('fetchlog theUser: ', theUser)

            this.fetchedUser = theUser
        },
        fetchOnServer: false,

        mounted() {
            //console.log('mounted...')
            //this.setCurrentUser();
        },

        methods: {
            setCurrentUser() {
                if(process.client) {
                    //console.log('settings current user...')
                    //console.log('netlifyIdentity: ', netlifyIdentity)
                    //console.log('netlifyIdentity current user: ', netlifyIdentity.currentUser())
                    this.currentUser2 = netlifyIdentity.currentUser();
                }
            },

            logSth() {
                //console.log('sth..')
            }
        }
    }
</script>

<style scoped>

</style>
