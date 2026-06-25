// Problem Statement:
// Write a function isEligibleForDriving that takes a user object as input and returns true if the user is eligible for a driving license (age >= 16), and false otherwise. Ensure the function has proper type annotations.

// Example Input:
// user = { name: "Alice", age: 20 }
// Example Output:
// true

interface User {
  firstName: string;
  lastName: string;
  age: number;
}

function isEligibleForDriving(users: User[]) {
  return users.filter((x) => x.age >= 18);
}
