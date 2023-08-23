const products = [
    { name: 'Product 1', price: 30 },
    { name: 'Product 2', price: 10 },
    { name: 'Product 3', price: 20 }
];

const users = [
    { name: 'John Doe', email: 'johndoe@example.com' },
    { name: 'Jane Smith', email: 'janesmith@example.com' },
    { name: 'Bob Johnson', email: 'bobjohnson@example.com' }
];

const byField = (fieldName) => {
    return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
}

const sortArray = (arr, fieldName) => {
    return sorted = arr.sort(byField(fieldName));
}

sortArray(products, 'price');
sortArray(users, 'name');


