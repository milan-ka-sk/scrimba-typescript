
// custom type: a bit deprecated, better to use interfaces
type person = {firstName: string};

const example1: object = {};
//example1.firstName = 'Dylan'; // error

const example3: person = {firstName: 'Dollan'};

example3.firstName = 'Dylan';