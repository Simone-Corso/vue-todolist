//creare la todo list, uguale come abbiamo fatto stamattina, facendo però due proprietà.

//creare un array degli oggetti, e inserire un todo per ogni oggetto.

const { createApp } = Vue;

createApp({
    data() {
        return {
            newTodoElement: '',
            todoList : [
                {
                    text: 'devo andare in palestra',
                    done: 'false',
                },
                {
                    text: 'devo contare fino a 100',
                    done: 'false',
                },
                {
                    text: 'pulire la casa in 40 minuti',
                    done: 'true',
                },
                {
                    text: 'giocare a Warzone6',
                    done: 'false',
                },
                {
                    text: 'cominciare la dieta',
                    done: 'true',
                },
    
            ]
          }
          
        },
    methods: {
        addNewTodoItem(newElement){
            newElement = newElement.trim();
            console.warn(newElement);

            const beatifiedElement = this.stringBeautifier(newElement);

            if (newElement.length > 3 ){
                this.newTodoElement = '';
                this.todoList.push({
                    id: this.todoList[this.todoList.length-1].id + 1 ,
                    text: beatifiedElement,
                    done: false
                });
            }
        },

        stringBeautifier(rawString){
            rawString = rawString.trim().toLowerCase();
            return rawString.charAt(0).toUpperCase() + rawString.slice(1);
        },

        removeTodoElement(elementId){

            const indexToBeRemoved = this.todoList.findIndex( element => element.id === elementId );
            this.todoList.splice(indexToBeRemoved, 1);
        },

        interactWithElement(indexToBeStruck){
            this.todoList[indexToBeStruck].done = !this.todoList[indexToBeStruck].done;
        }
    },

    created() {
    },
}).mount('#app');

    