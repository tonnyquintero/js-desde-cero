// Methods that modify the original array (Mutability).
// push()

const countries = ['USA', 'Colombia', 'Mexico', 'UK']

const newCountries = countries.push('Canada', 'Australia')

console.log(countries);
console.log(newCountries);

// pop()

const removedCountry = countries.pop()

console.log(countries);
console.log(removedCountry);