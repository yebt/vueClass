Vue.component('hijo',{
    template: //html 
    `
    <div class="py-5 bg-success">
        <h3>Son component UwU</h3>
        <h5>{{numero}}</h5>
        <h5>{{name}}</h5>
    </div>
    `,
    
    props: [
        'numero'
    ],
    data() {
        return {
            name: "horless "
        }
    },
    mounted() {
        // luego de que el DOM se pinte
        this.$emit('nameSon',this.name);
    },
})