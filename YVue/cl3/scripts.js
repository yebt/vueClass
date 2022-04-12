const app = new Vue({
    // id
    el: "#app",
    data: {
        title: "Task List v",
        // se comenta porque en el create se declara
        // task_list: [
        //     {
        //         title: "A new task",
        //         status: 0,
        //         time: new Date().toLocaleString()
        //     }
        // ],
        task_list:  [],
        validTaskText: false,
        newTask: ""
        // save task on local storage

    },
    methods: {
        addTask(){
            // show toast if not exist
            this.validTaskText = (this.newTask.trim().length === 0);
            if (this.newTask.trim().length !== 0){

                this.task_list.push({
                    title: this.newTask,
                    status: 0,
                    time: new Date().toLocaleString()
                });
                this.newTask ="";
            }
            // save on local storage
            this.saveTLL();

        },
        changeTaskStatus(index){
            this.task_list[index].status = ((this.task_list[index].status +1)% 2)
            // save on local storage
            this.saveTLL();
        },
        deleteTask(index){
            this.task_list.splice(index, 1);
            // save on local storage
            this.saveTLL();
        },
        saveTLL(){
            localStorage.setItem('b3y-vue', JSON.stringify( this.task_list));
        }
    },
    computed: {},
    // no usar funcion de flecha
    created: function(){
        // try take db from local storage
        // Probe if local storage var exist:
        let datosDB = JSON.parse( localStorage.getItem('b3y-vue'));
        this.task_list  = datosDB? datosDB :[]
    }
});
