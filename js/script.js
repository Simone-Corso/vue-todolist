//creare la todo list, uguale come abbiamo fatto stamattina, facendo però due proprietà.

//creare un array degli oggetti, e inserire un todo per ogni oggetto.

  const { createApp } = 'Vue';

  createApp({
    data() {
      return {
            listaTodos : [
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

    methods:{
        
    }
    
  }).mount('#app')
