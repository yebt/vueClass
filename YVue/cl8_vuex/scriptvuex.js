// tienda de datos, metodos y mutaciones
const storevx = new Vuex.Store({
    // estado
    state:{
        numberstore: 12
    },

    // mutaciones
    mutations : {
        increase(state){
            state.numberstore++;
        },
        decrease(state){
            state.numberstore--;
        },
        decreasen(state,n){
            state.numberstore-=n;
        }
    }

})