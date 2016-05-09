var randomNumber = function(min, max) {
  return Math.floor(Math.random() * (1 + max - min) + min);
}

// node magic
module.exports = randomNumber;
