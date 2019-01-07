<template>
  <v-app>
   <AppNavigation/> 

   <v-content transition="slide-x-transition">
            <router-view></router-view>
   </v-content>
  </v-app>
</template>

<script>
import 'firebase/database';
import AppNavigation from '@/components/AppNavigation';

export default {
    name: 'App',
    components:{
      AppNavigation
    }
};
</script>

<style>
</style>
