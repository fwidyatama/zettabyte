/**
 * Direction
 * Divide students to all of groups & students must sorted by first name
 *
 * Expected Result
 * [
 *   [
 *     { "firstName": "Belle", "lastName": "Norton" },
 *     { "firstName": "Finnley", "lastName": "Rennie" }
 *   ],
 *   [
 *     { "firstName": "Kai", "lastName": "Lyons" },
 *     { "firstName": "Peyton", "lastName": "Gardner" }
 *   ],
 *   [{ "firstName": "Tatiana", "lastName": "Dickerson" }]
 * ]
 */
const students = [
  { firstName: 'Kai', lastName: 'Lyons' },
  { firstName: 'Belle', lastName: 'Norton' },
  { firstName: 'Finnley', lastName: 'Rennie' },
  { firstName: 'Tatiana', lastName: 'Dickerson' },
  { firstName: 'Peyton', lastName: 'Gardner' },
];
const groups = 3;

function result(students, groups) {
  // sort array
  const sorted = students.sort((a, b) => {
    return a.firstName.localeCompare(b.firstName);
  });

  const result = [];
  const limit = students.length % groups;

  // split array based on limit group
  for (let i = 0; i <= students.length; i += limit) {
    const arr = sorted.slice(i, i + limit);
    result.push(arr);
  }
  return result;
}

console.log(result(students, groups));
