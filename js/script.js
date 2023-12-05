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
                    done: 'true',
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

            const todoNewEl = this.stringtodoNewEl(newElement);

            if (todoNewEl.length > 3 && this.todo.includes(todoNewEl)
            && !this.todoList.includes(todoNewEl) ){
                this.newTodoElement = '';
                this.todoList.push(todoNewEl);
            }
        },

        stringtodoNewEl(rawString){
            rawString = rawString.trim().toLowerCase();
            return rawString.charAt(0).toUpperCase() + rawString.slice(1);
        },

        removeTodoElement(indexToBeRemoved){
            console.log(indexToBeRemoved);
            this.todoList.splice(indexToBeRemoved, 1);
        }
    },

    created() {
    },
}).mount('#app');
    