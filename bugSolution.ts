function greeter(person: string): string {
  return "Hello, " + person;
}

function greeterArray(persons: string[]): string {
  return "Hello, " + persons.join(', ');
}

let user = ["Alice", "Bob"];

console.log(greeter(user[0]));
console.log(greeterArray(user));