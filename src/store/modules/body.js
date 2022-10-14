import axios from "axios";
import router from "@/router";

export default {
    actions: {
        getItems({commit, rootState}) {
            axios.get('http://localhost:8000/api/albums/'+rootState.body.selectedAlbum+'/items/', {
                headers: {Authorization: 'Bearer ' + rootState.auth.token}
            })
                .then(res => commit('updateItems', res.data))
                .catch(err => {
                    if (err.message === "Request failed with status code 401"){
                        router.push('/login')
                    } else {
                        console.log(err);
                    }
                })
                .finally(() => commit('updatePaths', rootState.body.items.map(item => generatePath(item.album, item.name, rootState.body))))
        },
        fetchAlbums({commit, rootState}) {
            axios.get("http://localhost:8000/api/albums", {
                headers: {Authorization: 'Bearer ' + rootState.auth.token}
            })
                .then(res => commit('updateAlbums', res.data))
                .catch(err =>{
                    if (err.message === "Request failed with status code 401"){
                        router.push('/login')
                    } else {
                        console.log(err);
                    }
                })

        },
        upload({rootState,  dispatch, state, commit}){
            const formData = new FormData();
            formData.append('image', state.itemToUpload)
            axios.post("http://localhost:8000/api/albums/demo/items/", formData, {
                headers: { Authorization: 'Bearer ' + rootState.auth.token}
            })
                .then(() => dispatch('getItems'))
                .then(()=>commit('updateItemToUpload', null))
                .catch(err => {
                    if (err.message === "Request failed with status code 401"){
                        router.push('/login')
                    } else {
                        console.log(err);
                    }
                })
        },
        deleteItem({rootState, dispatch, commit}){
            const path = "http://localhost:8000/api/albums/demo/items/"+rootState.body.itemIdToDelete
            axios.delete(path, {
                headers: { Authorization: 'Bearer ' + rootState.auth.token}
            })
                .then(() => dispatch('getItems'))
                .then(()=>commit('updateItemIdToDelete', ""))
                .catch(err => {
                    if (err.message === "Request failed with status code 401"){
                        router.push('/login')
                    } else {
                        console.log(err);
                    }
                })
        }
    },
        mutations: {
            updateSelectedAlbum(state, selectedAlbum) {
                state.selectedAlbum = selectedAlbum
            },
            updateItems(state, items) {
                state.items = items
            },
            updatePaths(state, paths) {
                state.paths = paths
            },
            updateIsAddItemDialogOpen(state) {
                state.isAddItemDialogOpen = !state.isAddItemDialogOpen
            },
            updateItemToUpload(state, itemToUpload) {
                state.itemToUpload = itemToUpload
            },
            updateAlbums(state, albums) {
                state.albums = albums
            },
            updateComponentKey(state) {
                state.componentKey++
            },
            updateItemIdToDelete(state, id) {
                state.itemIdToDelete = id
            }
        },
        getters: {
            getSelectedAlbum(state) {
                return state.selectedAlbum
            },
            getItems(state) {
                return state.items
            },
            getPaths(state) {
                return state.paths
            },
            getBaseURL(state) {
                return state.baseURL
            },
            getProjectID(state) {
                return state.projectID
            },
            getIsAddItemDialogOpen(state) {
                return state.isAddItemDialogOpen
            },
            getItemToUpload(state) {
                return state.itemToUpload
            },
            getAlbums(state) {
                return state.albums
            },
            getComponentKey(state) {
                return state.componentKey
            },
            getItemIdToDelete(state) {
                return state.itemIdToDelete
            }

        },
        state() {
            return {
                selectedAlbum: '',
                items: [],
                paths: [],
                baseURL: "https://upper-austria.ventuscloud.eu:8080",
                projectID: "c9801b4d232344f0869154501beaf8ed",
                isAddItemDialogOpen: false,
                itemToUpload: null,
                itemIdToDelete: "",
                albums: [{CreationDate: "2022-07-22T15:37:53.401Z", Name: "demo-1"}],
                componentKey: 0
            }
        }
}

function generatePath (album, name, state) {
        return state.baseURL+'/'+state.projectID+':'+album+'/'+name
    }