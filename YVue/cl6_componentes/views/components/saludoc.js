Vue.component("saludoc", {
    
    template: //html
    `
    <div> 
        <h1>saludo estatico</h1> 
        <h4> {{saludo_component}} </h4>
    </div>
    `,
    data() {
        return {
            saludo_component: "Hope component",
        };
    },
});
