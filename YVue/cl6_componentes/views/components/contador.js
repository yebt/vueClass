Vue.component('contador',{
    template://html
    `
    <div>
        <h3> {{number_count}} </h3>
        <button @click="number_count++" class="btn btn-dark">+</button>
    </div>
    `,
    data() {
        return {
            number_count:0
        }
    },
})