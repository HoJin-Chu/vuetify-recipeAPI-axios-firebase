import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        recipes: [],
        apiUrl: 'http://api.edamam.com/search'
    },
    mutations: {
        setRecipes(state, payload) {
            state.recipes = payload;
        }
    },
    actions: {
        async getRecipes(context, plan) {
            try {
                let response = await axios.get(`${context.state.apiUrl}`, {
                    params:{
                        q: plan,
                        app_id: 'ab1a5eca',
                        app_key: '7856433beec5a5f030677e62d50c227f',
                        from: 0,
                        to: 9
                    }
                })
                context.commit('setRecipes', response.data.hits);
            } catch (error) {
                context.commit('setRecipes', []);
            }
        }
    }
});
