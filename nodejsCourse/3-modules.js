// Modules
// const john = 'john'
// const peter = 'peter'

// const sayHi = (name) => {
//     console.log(`Hello there ${name}`);
// }

const names = require('./3-names');
const sayHi = require('./3-function');

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)

