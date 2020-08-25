export async function getTheUser() {
    //console.log('getting the user...');

    //console.log('proccess: ', process)

    if(process.client) {
        //console.log('--- netlify identity --- ', netlifyIdentity)

        netlifyIdentity.init();

        const currentUser = netlifyIdentity.currentUser();

        //console.log('+++ current User +++ ', currentUser)

        await currentUser.jwt();

        //console.log('getTheUser currents:', currentUser)
        return currentUser;
    }
}

async function getToken() {
    if(process.client) {
        const currentUser = netlifyIdentity.currentUser()

        //console.log('current user in auth provider: ', currentUser)

        if(!currentUser) {
            return ''
        }
        // fetchs new JWT token only if expired
        await currentUser.jwt()
        return currentUser.token.access_token

    }
}

export async function GET(api) {
    const headers = {};

    //console.log('trying to get on client: ', process.client)
    if(process.client) {
        const token = await getToken()
        return (await fetch(`https://foobase.netlify.app/.netlify/functions${api}`, {
            statusCode: 200,
            headers: {
                Authorization: `Bearer ${token}`,
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
            }
        })).json()
    }
}

export async function POST(api, body) {
    if(process.client) {
        const token = await getToken()
        return (await fetch(`https://foobase.netlify.app/.netlify/functions${api}`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(body)
        })).json()

    }
}
