// Create an object that simulates a class representing a car with properties
// like make, model, and year. Add a method to start the car.

let Car1 = {
  make: "Amanda",
  model: "BMW",
  year: 2024,
};

// Extend the previous car class object with a method to drive the car.
//  Print a message when you start and drive the car instance.

let Car2 = {
  make: "Amanda",
  model: "BMW",
  year: 2024,

  drive: function () {
    console.log(`${this.make} ${this.model} is now driving.`);
  },
};
