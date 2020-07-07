// Starting empty implementation for the index.js file
interface Person {
  firstName: string;
  lastName: string;
}

class Student {
  fullName: string;
  constructor(public firstName: string, public middleInitial: string, public lastName: string) {
    this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
  }
}

export const printMessage = function (person: Person, message: string): string {
  return `Hi, ${person.firstName} ${person.lastName}! Thanks for using the madl module. Development is currently in progress! Here is your input message: ${message}`;
};

console.log(
  printMessage(
    {
      firstName: 'Bob',
      lastName: 'Smith',
    },
    'This is some message...',
  ),
);

const user = new Student('Bob', 'J', 'Smith');

console.log(printMessage(user, 'Some other message...'));
