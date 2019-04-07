import { Bear, Man, Pig } from './interfaces';

let man: Man | Pig;
let bear: Bear;
let pig: Pig;


// var 1
// let manBearPig: Bear & Man & Pig;

// var 2
type ManBearPig = Bear & Man & Pig
let manBearPig: ManBearPig ;

manBearPig.firstName = 'Dylan';
manBearPig.claws = 3;
manBearPig.bacon = false;