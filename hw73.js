class Hamburger {
     static SIZE_SMALL = {
        tugriks: 50,
        calories: 20,
    };
    static SIZE_BIG = {
        tugriks: 100,
        calories: 40,
    };
    static TOPPING_SAUCE = {
        tugriks: 15,
        calories: 20,
    };
    static TOPPING_MAYO = {
        tugriks: 20,
        calories: 5,
    };
    static STUFFING_CHEESE = {
        tugriks: 10,
        calories: 20,
    };
    static SALAD = {
        tugriks: 20,
        calories: 5,
    };
    static POTATOES = {
        tugriks: 15,
        calories: 10,
    };

    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.toppings = [];
    }

    addTopping(topping) {
        this.toppings.push(topping);
    }

    calculate() {
        let countCalories =this.size.calories + this.stuffing.calories;
        countCalories +=  this.toppings.reduce((accumulator, topping) => accumulator + topping.calories, 0);
        return countCalories;
    }

    calculatePrice() {
        let countPrice =this.size.tugriks+this.stuffing.tugriks;
        countPrice +=  this.toppings.reduce((accumulator, topping) => accumulator + topping.tugriks, 0);
        return countPrice;
    }
}