## Task 1. Let's build a Teacher interface

Create a directory task_1 and copy these configuration files into this folder: package.json, tsconfig.json, webpack.config.js

Write your code in the js/main.ts file:

- Write an interface named Teacher that accepts the following elements:
  - firstName: string - can only be set during initialization of an object of this interface
  - lastName: string - can only be set during initialization of an object of this interface
  - fullTimeEmployee: boolean
  - yearsOfExperience: number - optional
  - location: string
  - Add the possibility to add any attribute to the Teacher object like contract(boolean) without specifying the name of the attribute:
    - Property should be a string
    - Type of this property can be anything

Requirements:
- When running, Webpack should return No type errors found.
- Every variable should use TypeScript when possible.

Example:
```
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// should print
// Object
// contract: false
// firstName: "John"
// fullTimeEmployee: false
// lastName: "Doe"
// location: "London"
```

## Task 2. Extending the Teacher class

Write an interface named `Directors` that extends `Teacher`. It requires an attribute named `numberOfReports(number)`

Example:
```
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

// should print
// Object
// firstName: "John"
// fullTimeEmployee: true
// lastName: "Doe"
// location: "London"
// numberOfReports: 17
```

## Task 3. Printing teachers

Write a function `printTeacher`:

- It accepts two arguments `firstName `and `lastName`
- It returns the first letter of the firstName and the full lastName
- Example: `printTeacher("John", "Doe") -> J. Doe`

Write an interface for the function named printTeacherFunction.

## Task 4. Writing a class

Write a Class named StudentClass:

- The constructor accepts `firstName(string)` and `lastName(string)` arguments
- The class has a method named `workOnHomework` that return the string `Currently working`
- The class has a method named `displayName`. It returns the `firstName` of the student
- The constructor of the class should be described through an Interface
- The class should be described through an Interface

Requirements:
- You can reuse the Webpack configuration from the previous exercise to compile the code.
- When running `npm run build`, no TypeScript error should be displayed.
- Every variable should use TypeScript when possible.