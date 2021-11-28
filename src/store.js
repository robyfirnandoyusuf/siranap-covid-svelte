import { writable, readable } from 'svelte/store';


const userData = {
    name: 'Heropy',
    age: 85,
    email: 'thesecon@gmail.com',
    token: 'Ag1oy1hsdSDe'
}

export let dataApi = writable([]);

export let resApi = readable(dataApi, (set) => {
    console.log('user 구독자가 1명 이상일 때!')
    delete dataApi.token
    set(dataApi)
    return () => {
        console.log('user 구독자가 0명일 때...')
    }
})