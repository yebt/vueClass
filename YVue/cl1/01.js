const icons = ['🥫', '🥘', '🌽 ', ' 🍱 ', ' 🥗', '🍳 ', '🥪 ',  '🥓', '🍺',  '🍵',  '☕', '🍹',  '🍷'];
// Init the app
const app = new Vue({
    // select the id where put the app content
    el: '#app',
    // Data and vars
    data: {
        title: 'Hope VueWrld',
        fruits: ['Apple', 'Pear', 'Banana'],
        frutas_obj: [
            {
                name: 'Pear',
                icon: '🍐',
                status: 'Fall',
                stock: 12
            },
            {
                name: 'Apple',
                icon: '🍎',
                status: 'Rose',
                stock: 34
            },
            {
                name: 'Strawberry',
                icon: '🍓',
                status: 'Fall',
                stock: 23
            },
            {
                name: 'Cherry',
                icon: '🍒',
                status: 'Remain',
                stock: 5
            },
            {
                name: 'Banana',
                icon: '🍌',
                status: 'Rose',
                stock: 0
            },
        ],
        // in thius case use this var to create a model
        // with the input
        newFruit:'',
        total:0
    },
    methods:{
        addFruit(){
            // console.log('click')
            this.frutas_obj.push({
                name: this.newFruit,
                icon: icons[Math.floor(Math.random()*icons.length)],
                status: ['Rose', 'Remain', 'Fall'] [Math.floor( Math.random()*3)],
                stock: 0
            });
            // CLEAR data
            this.newFruit='';
        }
    },
    computed: {
        sumFruits() {
            this.total = 0
            this.frutas_obj.map(( element) =>{
                this.total += element.stock
            })
            return this.total;
        }
    }
});
