import { createApp } from 'https://unpkg.com/petite-vue@0.4.1/dist/petite-vue.es.js';

createApp({
    randomVar: "hello!!!!!",
    roles: [],

    async mounted() {
        try {
            const data = await fetch('./roles.json');
            this.roles = await data.json();
        } catch (error) {
            console.error(`Something went wrong while fetching roles: ${error}`)
        }
    }
}).mount()
