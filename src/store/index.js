import { createStore } from 'vuex'
import auth from './modules/auth'
import body from './modules/body'
import createPersistedState from "vuex-persistedstate";

// Create a new store instance.
export default new createStore({

    modules: {
        auth,
        body
    },
    plugins: [createPersistedState()],
})
