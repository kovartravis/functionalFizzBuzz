const _ = require('lodash')

const printPretty = (a) =>{
    for(i = 0; i < a.length; i++){
        console.log(a[i])
    }
}

let array = _.range(1, 50)
array = _.map(array, a => {if(a%15 == 0){return a + " :FizzBuzz"} else return a})
array = _.map(array, a => {if(a%3 == 0){return a + " :Fizz"} else return a})
array = _.map(array, a => {if(a%5 == 0){return a + " :Buzz"} else return a})

printPretty(array)