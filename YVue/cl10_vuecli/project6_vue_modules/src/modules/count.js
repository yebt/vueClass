export default {
    namespaced:true,
    state: {
        counter:12
    },
    mutations: {
        changeCounter(state, n){
            state.counter += n
        }
    },
    actions: {},
    getters: {}
}