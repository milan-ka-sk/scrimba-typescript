let definetlyNotAString: any = 'I am a string';

//let strLength = definetlyNotAString.length; // might not work coy it is any

// cast type

// var 1
// let strLength = (definetlyNotAString as string).length;

// var 2
let strLength = (<string> definetlyNotAString).length;