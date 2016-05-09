var random = require('./randomnumber');
var convertUsd = require('./convert');
var number = random(100, 10000);
var newNumber = convertUsd(number);
var accountBalance = "Account Balance $" + newNumber;

module.exports.newNumber = newNumber;
module.exports.accountBalance = accountBalance;
