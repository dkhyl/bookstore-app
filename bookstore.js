// Define an array to store book information
let books = [
    [1, "Start with why", "Simon Sinek", 80.0, 13],
    [2, "But how do it know", "J. Clark Scott", 59.9, 22],
    [3, "Clean Code", "Robert Cecil Martin", 50.0, 5],
    [4, "Zero to One", "Peter Thiel", 45.0, 12],
    [5, "You don't know JS", "Kyle Simpson", 39.9, 9]
];

// Function to add a book
function addBook(id, title, author, price, quantity) {
    books.push([id, title, author, price, quantity]);
}

// Function to edit a book
function editBook(id, title, author, price, quantity) {
    for (let i = 0; i < books.length; i++) {
        if (books[i][0] === id) {
            books[i][1] = title;
            books[i][2] = author;
            books[i][3] = price;
            books[i][4] = quantity;
            return;
        }
    }
    console.log("Book not found");
}

// Function to delete a book
function deleteBook(id) {
    for (let i = 0; i < books.length; i++) {
        if (books[i][0] === id) {
            books.splice(i, 1);
            return;
        }
    }
    console.log("Book not found");
}

// Function to display all books
function displayBooks() {
    console.log("Books in the store:");
    books.forEach(book => {
        console.log(`ID: ${book[0]}, Title: ${book[1]}, Author: ${book[2]}, Price: ${book[3]}, Quantity: ${book[4]}`);
    });
}

// Function to search for a book by ID
function searchBookById(id) {
    for (let book of books) {
        if (book[0] === id) {
            console.log(`Found: ID: ${book[0]}, Title: ${book[1]}, Author: ${book[2]}, Price: ${book[3]}, Quantity: ${book[4]}`);
            return;
        }
    }
    console.log("Book not found");
}

// Function to sell a book and print an invoice
function sellBook(title, quantity, balance) {
    for (let book of books) {
        if (book[1] === title) {
            if (book[4] >= quantity) {
                let totalCost = book[3] * quantity;
                if (balance >= totalCost) {
                    book[4] -= quantity;
                    console.log(`Invoice: Sold ${quantity} of "${title}" for $${totalCost}`);
                } else {
                    console.log("Insufficient balance");
                }
            } else {
                console.log("Not enough stock");
            }
            return;
        }
    }
    console.log("Book not found");
}

// Example of using the functions
displayBooks(); // Show all books
sellBook("Start with why", 2, 200);  // Sell a book
editBook(2, "But how do I know", "J. Clark Scott", 59.9, 20); // Edit a book
deleteBook(3); // Delete a book
searchBookById(4); // Search for a book

