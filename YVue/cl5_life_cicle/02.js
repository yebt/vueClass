const app = new Vue({
    // id
    el: "#app",
    data: {
        message: "Hope"
    },
    methods: {},
    computed: {},
    // ciclo de vida
    beforeCreate(){
        // se ejecuta antes de cargar data, metodos, observadores y eventos
                console.log('BeforeCreate')
    },
    created(){
        // se ejecuta despeus de cargar data,
        // se ejecuta despues de cargar data, metodos, observadores y eventos
        // pero no se ha creado el
        console.log('Created')
    },
    beforeMount(){
        // se ejecuta antes de inserta info en el DOM
        console.log('BeforeMount')
    },
    mounted(){
        // se ejecuta despues de inserta info en el DOM
        console.log('Mounted')
    },
    beforeUpdate(){
        // se ejecuta al detectar un cambio
        console.log('BeforeUpdate')
    },
    updated(){
        // se ejecuta luego de realizado un cambio
        console.log('Updated')
    },
    beforeDestroy(){
        console.log('BeforeDestroy')
    },
    destroyed(){
        console.log('Destroyed')
    }
    
});
