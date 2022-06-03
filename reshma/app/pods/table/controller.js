import Controller from '@ember/controller';

export default Controller.extend({

    id: '',
    firstName: '',
    lastName: '',
    age: '',
    employees: [
        { id: 1, firstName: 'Marie', lastName: 'Curie', age: 30 },
        { id: 2, firstName: 'Mae', lastName: 'Jemison', age: 25 },
        { id: 3, firstName: 'Albert', lastName: 'Hofmann', age: 20 },

    ],

   
    });
