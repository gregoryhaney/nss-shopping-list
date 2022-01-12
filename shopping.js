

// create an array holding grocery items as the objects
// each object will keys of: id, name, price with appropriate values
// log to the console all the objects in the array


const highPriorityItemsArray = [
    {
        id: 1,          // number (integer)
        name: "Milk",   // string
        price: 4.49     // number (float)
    },

    {
        id: 2,          // number (integer)
        name: "Eggs",   // string
        price: 3.69     // number (float)
    },

    {
        id: 3,                 // number (integer)
        name: "Pizza Rolls",   // string
        price: 12.19           // number (float)
    },

    {
        id: 4,                    // number (integer)
        name: "Chicken Breast",   // string
        price: 11.39              // number (float)
    },

    {
        id: 5,            // number (integer)
        name: "Banana",   // string
        price: 0.49       // number (float)
    },

    {
        id: 6,          // number (integer)
        name: "Buns",   // string
        price: 4.69     // number (float)
    },

    {
        id: 7,             // number (integer)
        name: "Ketchup",   // string
        price: 1.79        // number (float)
    }
]

console.log(highPriorityItemsArray)

// add a FOR...OF loop with an IF condition to iterate through
// all objects in the array and log to the console only those with
// a cost greater than $8 (variable for this hardcoded)

const highPrice = 8.00
for (const highPriorityItem of highPriorityItemsArray) {
        if (highPriorityItem.price > highPrice) {
            console.log(`The ${highPriorityItem.name} is rather expensive. It costs $${highPriorityItem.price}.`)
        }
}