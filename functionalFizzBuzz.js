const _ = require('lodash')

let array = _.map(_.range(1, 100), a => {if(a%15 == 0){return a + " :FizzBuzz"} else return a})
array = _.map(array, a => {if(a%3 == 0){return a + " :Fizz"} else return a})
array = _.map(array, a => {if(a%5 == 0){return a + " :Buzz"} else return a})
array = _.filter(array, a => typeof a !== 'number')

_.forEach(array, (a) => console.log(a));