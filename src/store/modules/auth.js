import axios from "axios";
import router from "@/router";

export default {
    actions: {
        login({commit, state}){
            const body = {email: state.email, password: state.password}
            axios.post('http://s3gallery-svc:8000.dev.svc.cluster.local/sign-in', body)
                .then((res)=> {
                    commit('updateToken', res.data.token);
                    commit('updateUser', res.data.user)})
                .then(()=> {
                    router.push('/main')
                })
                .catch(err => console.log(err))
        },
        test() {
            axios.get('https://www.google.com/search?q=javascript')
                .then(resp => {
                    console.log(resp);
                    console.log('======success=======');
                })
                .catch(err => {
                    console.log('======failure=======');
                    console.log(err);
                });
        }
    },

    mutations: {
        updateToken (state, token) {
            state.token = token
        },
        updateUser (state, user) {
            state.user = user
        },
        updatePassword (state, password) {
            state.password = password
        },
        updateEmail (state, email) {
            state.email = email
        },
        updateSessCookie (state, sessCookie) {
            state.sessCookie = sessCookie
        }
    },
    getters: {
        getPassword(state){
            return state.password
        },
        getEmail(state){
            return state.email
        },
        getUser(state){
            return state.user
        },
        getToken(state){
            return state.token
        },
        getSessCookie(state){
            return state.sessCookie
        }
    },
    state () {
        return {
            token: "",
            user: "user",
            email:"",
            password:"",
            sessCookie:""
        }
    }
}