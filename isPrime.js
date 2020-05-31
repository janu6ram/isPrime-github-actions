const isPrime = function(num){
    let n = Math.sqrt(num)
    for(let i = 2; i <= n;i++) {
        if(num%i == 0){
            return false;
        }
    }
    return true;
}

var assert = require('assert');
assert(isPrime(7)===true,"7,1st testcase failed")
assert(isPrime(11)===true,"11,2nd testcase failed")
assert(isPrime(126)===false,"126,3rd testcase failed")
assert(isPrime(77)===false,"77,4th testcase failed")
assert(isPrime(2)===true,"2,5th testcase failed")
console.log("all testcases are passed");