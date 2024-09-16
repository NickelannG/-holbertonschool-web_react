interface student {
  firstName: string,
  lastName: string,
  age: number,
  location: string;
}

let studentList: student[] = [];

const student1: student = {
  firstName: "Nicole",
  lastName: "Gorospe",
  age: 68,
  location: "Philippines"
};

const student2: student = {
  firstName: "Griffin",
  lastName: "Dog",
  age: 8,
  location: "Singapore"
};

studentList.push(student1, student2);

// creating the table
const studentTable = document.createElement("table");

// loop through array using a function
studentList.forEach((student) => {
  // creating a row for each student using tr
  const row = document.createElement('tr');

  // creating a new table cell using td for firstName
  const firstNameCell = document.createElement('td');
  // Adding data as text content to the cell
  firstNameCell.textContent = student.firstName;

  // creating another cell for location
  const locationCell = document.createElement('td');
  // adding data to cell
  locationCell.textContent = student.location;

  // append the first Name and location cells to current row
  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  // append the current row to the table
  studentTable.appendChild(row);
});
// append the whole table to the document body
document.body.appendChild(studentTable);