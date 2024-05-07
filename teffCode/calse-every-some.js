// Methods that DO NOT modify the original array (Inmutability)

const ages = [21, 25, 31, 19, 22]

// every

const allAreAdults = ages.every(age => age > 18)

console.log(allAreAdults);

// some 

const atLeastOneIsOver30 = ages.some(age => age > 30)
console.log(atLeastOneIsOver30);