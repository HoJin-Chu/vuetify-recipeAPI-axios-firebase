<template>
    <span>
        <v-navigation-drawer app v-model="drawer" class="grey darken-1" dark disable-resize-watcher>
            <v-list>
                <template v-for="(item, index) in items">
                    <v-list-tile :key="index">
                        <v-list-tile-content>
                            {{item.title}}
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider :key="`divider-${index}`"></v-divider>
                </template>
            </v-list>
        </v-navigation-drawer> 

        <v-toolbar app color="blue darken-1" dark>
            <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <router-link to="/">
            <v-toolbar-title>{{appTitle}}</v-toolbar-title>
            </router-link>
            <v-btn flat class="hidden-sm-and-down" to="Menu">Menu</v-btn>
            <v-spacer class="hidden-sm-and-down"></v-spacer>

            <div v-if="!isAuthenticated" class="hidden-sm-and-down">
                <v-btn flat class="hidden-sm-and-down" to="/Signin">SIGN IN</v-btn>
                <v-btn color="blue lighten-2" class="hidden-sm-and-down" to="/Join">JOIN</v-btn>
            </div>

            <div v-else>
                <v-btn flat to="/about">PROFILE</v-btn>
                <v-btn outline color="white" @click="logout">Logout</v-btn>
            </div>

            
        </v-toolbar>
    </span>
</template>

<script>
export default {
    name: 'AppNavigation',
    data() {
        return {
            appTitle: 'CHU',
            drawer: false,
            items: [
                { title: 'Menu' },
                { title: 'Profile' }, 
                { title: 'Sign In' },
                { title: 'Join' }
            ]
        };
    },
    computed: {
        isAuthenticated(){
            return this.$store.getters.isAuthenticated
        }
    },
    methods: {
        logout(){
            this.$store.dispatch('userSignOut')
        }
    },
};
</script>

<style scoped>
a {
    color: white;
    text-decoration: none;
}
</style>