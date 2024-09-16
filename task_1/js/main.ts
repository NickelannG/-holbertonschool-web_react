// task 1
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// task 2
interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Task 3
// interface for the printTeacherFunction
interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}
// printTeacher function that returns first letter of firtName and full lastName
const printTeacher: PrintTeacherFunction = function (firstName: string, lastName: string): string {
  return (firstName[0] + '.' + lastName)
}
