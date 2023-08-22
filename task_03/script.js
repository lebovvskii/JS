const users = [
    { name: 'John Doe', accessLevel: 'admin' },
    { name: 'Jane Smith', accessLevel: 'user' },
    { name: 'Bob Johnson', accessLevel: 'user' },
    { name: 'Alice Brown', accessLevel: 'admin' }
  ];

const accessLevelCount = (users) => {
    const levels = {};
    for (user of users) {
        const accessLevel = user.accessLevel;
        if (levels[accessLevel]) {
            levels[accessLevel]++;
        } else {
            levels[accessLevel] = 1;
        }
    }
    console.log(levels)
}

accessLevelCount(users)