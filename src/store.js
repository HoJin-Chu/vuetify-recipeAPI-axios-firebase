import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import firebase from 'firebase';
import router from '@/router';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        recipes: [],
        apiUrl: 'http://api.edamam.com/search',
        user: null,
        isAuthenticated: false
    },
    mutations: {
        setRecipes(state, payload) {
            state.recipes = payload;
        },
        setUser(state, payload) {
            state.user = payload;
        },
        setIsAuthenticated(state, payload) {
            state.isAuthenticated = payload;
        }
    },
    actions: {
        async getRecipes(context, plan) {
            try {
                let response = await axios.get(`${context.state.apiUrl}`, {
                    params: {
                        q: plan,
                        app_id: 'ab1a5eca',
                        app_key: '7856433beec5a5f030677e62d50c227f',
                        from: 0,
                        to: 18
                    }
                });
                context.commit('setRecipes', response.data.hits);
            } catch (error) {
                context.commit('setRecipes', []);
            }
        },
        userJoin({ commit }, { email, password }) {
            // 회원가입 파이어베이스에 request
            firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then(user => {
                    commit('setUser', user);
                    commit('setIsAuthenticated', true);
                })
                .catch(() => {
                    commit('setUser', null);
                    commit('setIsAuthenticated', false);
                });
        },
        userLogin(context, { email, password }) {
            // 로그인을 하기위해 파이어베이스에 request
            firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then(user => {
                    context.commit('setUser', user);
                    context.commit('setIsAuthenticated', true);
                    router.push('/about');
                })
                .catch(() => {
                    context.commit('setUser', null);
                    context.commit('setIsAuthenticated', false);
                    router.push('/');
                });
        }
    }
});
