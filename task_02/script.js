const users = [
    { name: "Alice", age: 22 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 28 },
    { name: "David", age: 15 },
    { name: "Eve", age: 20 },
];

const adult = (users) => {
    const result = [];
    for (user of users) {
        if (user.age >= 18) {
            result.push(user);
        }
    }
    console.log(result)
    return result;
}

adult(users);