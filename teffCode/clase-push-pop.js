// Methods that modify the original array (Mutability).
// push()

const countries = ['USA', 'Colombia', 'Mexico', 'UK']

const newCountries = countries.push('Canada', 'Australia')


// pop()

const removedCountry = countries.pop()

// Practic Excersice

const bookCart = []

const ADD_BOOK_ACTION = 'addBook'
const DELETE_BOOK_ACTION = 'deleteBook'
const SHOW_BOOKS_ACTION = 'showBook'

function bookPerformance (action, bookName) {
    switch (action) {
        case ADD_BOOK_ACTION:
            bookCart.push(bookName)
            break;
        case DELETE_BOOK_ACTION:
             if (bookCart.length === 0) {
                console.log('The cart is empty');
             } else {
                const deletedBook = bookCart.pop()
                console.log(`Deleted book: ${deletedBook}`);
             }
            break;
        case SHOW_BOOKS_ACTION:
            console.log(bookCart);
             break;
        default:
            console.log('invalid option please choose a right function');
    }
}

bookPerformance(ADD_BOOK_ACTION, '100 años de soledad')
bookPerformance(SHOW_BOOKS_ACTION)
bookPerformance(ADD_BOOK_ACTION, 'Ensayo sobre la ceguera')
bookPerformance(SHOW_BOOKS_ACTION)
bookPerformance(DELETE_BOOK_ACTION)
bookPerformance(SHOW_BOOKS_ACTION)
bookPerformance(ADD_BOOK_ACTION, 'metamorfosis')
bookPerformance(SHOW_BOOKS_ACTION)
bookPerformance(DELETE_BOOK_ACTION)
bookPerformance(SHOW_BOOKS_ACTION)
