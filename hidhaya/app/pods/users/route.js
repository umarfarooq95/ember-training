import Route from "@ember/routing/route";
export default Route.extend({
  setupController(controller) {
  
    controller.set('users', [
      {
      
        firstName: 'Thomas',
        lastName: 'George',
        age: 25
      },
      {
       
        firstName: 'John',
        lastName: 'David',
         age: 24
      }
    ] );
  },

actions: {
  add() {
          this.controller.data.push({
       firstName: 'Mark',
       lastName: 'Taylor',
       age: 22 
          
    })
     },
 },
 });
