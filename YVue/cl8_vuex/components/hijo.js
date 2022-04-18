Vue.component('hijo',{
    template: //html 
    `
    <div class="py-5 bg-success">
        <button class="btn btn-danger" @click="$store.commit('increase')">+</button>
        <button class="btn btn-warning" @click="increase">+</button>
        <button class="btn btn-warning" @click="decrease">-</button>
        <button class="btn btn-info" @click="decreasen(2)">-</button>
        <span class="badge bg-info text-dark">{{$store.state.numberstore}}</span>
        <span class="badge bg-warning text-dark">{{numberstore}}</span>
    </div>
    `,
    computed:{
        numerocomputed(){
            return store.state.numberstore
        },
        // los 3 puntos asocian todos los componetes a computed
        // ahora se puede llamar al numberstore como una propiedad propia dee componente
        ...Vuex.mapState(['numberstore'])
    },
    methods: {
        // se destructura el objeto
        // ahora se puede llamar a increase como un method pŕopio del componete
        ...Vuex.mapMutations(['increase','decrease','decreasen'])
    },
})