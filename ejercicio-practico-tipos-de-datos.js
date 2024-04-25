// 1 user information
const username = 'codingAdventurer'
const fullName = 'Jhon Doe'
const age = 24
const isStudent = true

// 2. Address
const addresss = {
    street: '123 Main Street',
    city: 'Techville',
    state: 'Codingland',
    zipCode: 54
}

// 3 Hoobies
const hobbies = ['coding', 'reading', 'gaming']

// 4 Generating personalized bio
const personalizedBio = `
    Hi, i'm ${fullName}.
    i'm ${age} years old
    I live in ${addresss.city}.
    my second favourite hoobie is ${hobbies[1]}
    all my hoobies are ${hobbies.join(' - ')}.
`

console.log(personalizedBio);