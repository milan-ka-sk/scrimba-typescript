import { Person } from './person.model';

const example1: Person = new Person({firstName: 'Dollan'});

example1.firstName = 'Dylan';
example1.middleName = 'Coding God';
example1.lastName = 'Israel';

// typescript class vs interface
// https://ultimatecourses.com/blog/classes-vs-interfaces-in-typescript