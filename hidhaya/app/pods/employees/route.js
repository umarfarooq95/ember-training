import Route from "@ember/routing/route";

export default Route.extend({
  setupController(controller) {
    controller.set("employees", [
      {
        firstName: "Thomas",
        lastName: "George",
        age: 25,
      },
      {
        firstName: "John",
        lastName: "David",
        age: 24,
      },
    ]);
  },

  actions: {
    add() {
      console.log("add");
      const employeeInfo = this.get("controller.employees");
      const firstName = this.get("firstName");
      const lastName = this.get("lastName");
      const age = this.get("age");

      const information = {
        firstName: "Mark",
        lastName: "Steves",
        age: 23,
      };
      employeeInfo.pushObject(information);
      this.controller.set("employees", employeeInfo);
      console.log(employeeInfo);
    },
  },
});
