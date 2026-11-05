const prices = [10, 20, 30, 40, 50];

const total = prices.reduce((total, price) => total + price, 0);
console.log(total);
