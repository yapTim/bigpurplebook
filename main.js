import { createApp } from 'https://unpkg.com/petite-vue@0.4.1/dist/petite-vue.es.js';

createApp({
    randomVar: "hello!!!!!",
    roles: [],
    selectedRole: null,

    async mounted() {
        try {
            const data = await fetch('./roles.json');
            this.roles = await data.json();
        } catch (error) {
            console.error(`Something went wrong while fetching roles: ${error}`)
        }

        // Sort roles in alphabetical order
        this.roles = this.roles.sort((a, b) => a.name.localeCompare(b.name))
    },

    // This way is super hacky, but it's the only way I know how to interact with
    // the JS behavior of the FlowBite sidebar component. Will do some more research later.
    // or will implement my own sidebar.
    closeSidebar() {
        const drawerCloseButton = document.getElementById("draw-navigation-close");
        if (drawerCloseButton) {
            if (drawerCloseButton.onclick) {
                drawerCloseButton.onclick();
            } else if (drawerCloseButton.click) {
                drawerCloseButton.click();
            }
        }
    },

    selectRole(role) {
        this.selectedRole = role;
        this.closeSidebar();
    },

    convertAltName(name) {
        console.log('in here')
        return name.toLowerCase().replace(" ", "-");
    }
}).mount()
