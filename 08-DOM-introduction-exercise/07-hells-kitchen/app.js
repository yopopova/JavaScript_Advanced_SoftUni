function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let input = JSON.parse(document.querySelector('#inputs textarea').value);
      // ^ We turn it into an array of strings with JSON.parse().

      let avgSalary = 0;
      let totalSalary = 0;
      let currAvgSalary = 0;
      let bestName = '';
      let output = {};

      for (let line of input) {
         let restaurantInfo = line.split(' - ');
         let restaurantName = restaurantInfo.shift();
         let workersData = restaurantInfo[0].split(', ');

         for (let worker of workersData) {
            let [name, salary] = worker.split(' ');

            if (!output.hasOwnProperty(restaurantName)) {
               output[restaurantName] = {};
               // ^ If the restaurant name is not in the object, we add it and make it an empty object.
            }

            if (output.hasOwnProperty(restaurantName)) {
               output[restaurantName][name] = Number(salary);
               // ^ In the name of the respective restaurant to put the current name and salary to it.
               // This part can also be completed as the 'else' of the above check.
            }
         }
      }

      let entries = Object.entries(output);

      for (let entry of entries) {
         // ['PizzaHut', {…}]
         let key = entry[0];
         let values = Object.entries(entry[1]);
         // ^ Here again we use Object.entries() to convert the item from an object to an array.

         for (let [name, salary] of values) {
            totalSalary += salary;
         }

         avgSalary = totalSalary / values.length;

         if (avgSalary > currAvgSalary) {
            currAvgSalary = avgSalary;
            bestName = key;
            totalSalary = 0;
         }

         let result = Object.entries(output[bestName]).sort((a, b) => b[1] - a[1]);
         // ^ a[1] and b[1] because we want to sort by salary which is at index 1.

         let print = '';
         result.forEach(w => print += `Name: ${w[0]} With Salary: ${w[1]} `);

         document.querySelector('#bestRestaurant p').textContent = `Name: ${bestName} Average Salary: ${currAvgSalary.toFixed(2)} Best Salary: ${result[0][1].toFixed(2)}`;
         document.querySelector('#workers p').textContent = print;
      }
   }
}