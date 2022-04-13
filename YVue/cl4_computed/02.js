const app = new Vue({
    // id
    el: "#app",
    data: {
        title: "Computes propeties",
        message: "Hope",
        contador: 0,
    },
    methods: {},
    computed: {
        invertido(){
            return (this.message.split("").reverse().join(""));
        },
        color(){
            return {
                'bg-primary': this.contador <=20,
                'bg-info': this.contador >20 && this.contador <=40, 
                'bg-success': this.contador >40 && this.contador <=60, 
                'bg-warning': this.contador >60 && this.contador <=80, 
                'bg-danger': this.contador >80  
            }
        }
    },
});
