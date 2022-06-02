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

    //const employee =[{name: 'umar', age: 55}, {name: 'vinoth', age: 10}]

    // name: '',
    // age: '',
    // employees: [],
    // actions: {
    //     note() {
    //         //console.log("umar");
    //         const name = this.get('name');
    //         const age = this.get('age');
    //         const dynamic = this.get('employees');
    //         console.log(name);
    //         console.log(age);
    //         const details = {
    //             name,
    //             age
    //         }
    //         dynamic.pushObject(details);
    //         console.log(dynamic)
    //         this.set('employees', dynamic);
    //     },
    // },
    });
