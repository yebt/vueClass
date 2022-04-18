Vue.component('padre',{
    template: //html 
    `
    <div class="bg-dark p-5 text-white">
        <h2>Father component <span class="badge bg-info text-dark">{{numPadre}}</span></h2>
        <button class="btn btn-danger" @click="numPadre++">+</button>
        <h3> {{nameFromSon}} </h3>
        <hijo :numero="numPadre" @nameSon="nameFromSon = $event"></hijo>
    </div>
    `,
    data() {
        return {
            numPadre:0,
            nameFromSon: ''
        }
    },
})