import Route from '@ember/routing/route';

export default Route.extend({
   
      setupController(controller,model){
            controller.set('name', 'Reshma')
            controller.set('age', 'Begum')
      },

 actions: {
        add() {
            console.log("added")
            

            this.controller.set('firstName', 'sabira')

        },


    }

    });

    
