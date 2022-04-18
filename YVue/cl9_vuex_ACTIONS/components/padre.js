Vue.component('padre',{
    template: //html 
    `
    <div class="bg-dark p-5 text-white">
        <h2>Number {{ $store.state.numberstore }} </h2>
        <span> {{numberstore}} </span>
        <hijo></hijo>
    </div>
    `,
    computed:{
        numerocomputed(){
            return store.state.numberstore
        },
        // los 3 puntos asocian todos los componetes a computed
        // ahora se puede llamar al numberstore como una propiedad propia dee componente
        ...Vuex.mapState(['numberstore'])
    }
})