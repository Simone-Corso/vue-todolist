//creare la todo list, uguale come abbiamo fatto stamattina, facendo però due proprietà.

//creare un array degli oggetti, e inserire un todo per ogni oggetto.

  const { createApp } = 'Vue';

  createApp({
    data() {
      return {
        MyNewTodoListEl: '',
        MytodoList : [
            'andare a correre', 
            'vincere una maratona',
            'seguire a tempo la musica',
            'viaggiare per il mondo'
        ],

      }
    }
  }).mount('#app')
