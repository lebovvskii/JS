const rootEmployee = {
    name: 'Boss',
    subordinates: [
      {
        name: 'John Doe',
        subordinates: []
      },
      {
        name: 'Jane Smith',
        subordinates: [
          {
            name: 'Mike Johnson',
            subordinates: []
          }
        ]
      }
    ]
};



const result = [];

const getName = (root) => {
    let name = root.name;
    result.push(name);
    let subordinates = root.subordinates;
    for (subordinate of subordinates) {
        getName(subordinate);
    };
    return result;
}

console.log(getName(rootEmployee));