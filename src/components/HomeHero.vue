<template>
    <v-container fluid fill-height class="home-hero" style="max-height: 100vh">
        <v-layout justify-center align-center column pa-5>
            <div class="display-4 font-weight-black white--text text-xs-center mb-5">RECIPE</div>
            <div class="display-2 font-weight-bold white--text text-xs-center">You can make all the food.</div>
            <v-btn fab class="mt-5 blue darken-2">
            <v-icon large color="white">expand_more</v-icon>
            </v-btn>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'HomeHero'
};
</script>

<style scoped>
.home-hero {
    background: url('http://source.unsplash.com/uQs1802D0CQ');
    background-size: cover;
    width: 100%;
    height: 100%;
}
</style>