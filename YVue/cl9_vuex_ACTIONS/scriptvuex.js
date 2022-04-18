// tienda de datos, metodos y mutaciones
const storevx = new Vuex.Store({
    // estado
    state:{
        numberstore: 12,
        cursos: []
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
        },
        fillCourses(state, coursesAction){
            state.cursos = coursesAction;
        }
    },
    // aactions
    actions: {
        getCourses: async function ({ commit }){
            const data = await fetch('./assents/json/cursos.json');
            const cursos = await data.json();
            commit('fillCourses',cursos)
        }
    }

})