import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
    id: '',
    firstName: '',
    lastName: '',
    age: '',
    name: '',

    persons: [
        { id: 1, firstName: 'Roshan', lastName: 'Sabika', age: 30 },
        { id: 2, firstName: 'Reshma', lastName: 'Begum', age: 30 },
    ],

    actions: {
        add() {
            console.log('add')
            const id = this.get('id');
            const firstName = this.get('firstName');
            const lastName = this.get('lastName');
            const age = this.get('age');
            const personDetails = this.get('persons');
            const details = {
                firstName:firstName,
                lastName:lastName,
                age:age,
                id:id,
            }
            personDetails.pushObject(details);
            this.set('id','3')
            this.set('firstName','sabira')
            this.set('lastName','begum')
            this.set('age',30)

            console.log(personDetails)
            this.set('persons', personDetails);

        },
        delete(index) {
            
            const personDetails = this.get('persons');
            personDetails.removeObject(index)
            console.log(personDetails)
            this.set('persons', personDetails);
        },
    }

});
