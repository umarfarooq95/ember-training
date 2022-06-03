import Route from '@ember/routing/route';

export default Route.extend({
    setupController(controller, model) {
        controller.set('firstName', 'John');
        controller.set('lastName', 'Alex');
      },
 
    // init(){
    //     this._super(...arguments);
    // }

    actions: {
    login(){
        console.log('Login')
    }
}
});
