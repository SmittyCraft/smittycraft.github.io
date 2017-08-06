// To be assigned values later
var max;
var min;
var jar;
var hits;

// Call any of the following function with $scm.function();
var $scm = {
  randomBetween: function (min, max) {
    return Math.floor(Math.random() * ((max - min) + 1));
  },
  
  round: function (number) {
    return {
      toNearest: function (base) {
        return Math.round(number / base) * base;
      },
      
      basic: function () {
        return Math.round(number);
      }
    };
  },
  
  findLCM: function (numberOne, numberTwo) {
    if (numberOne !== numberTwo) {
      max = Math.max(numberOne, numberTwo);
      min = Math.min(numberOne, numberTwo);
      hits = {
        min: [],
        max: [],
        both: []
      };
      // The for loop starts at i = 2, which is disgusting, but executing i = 0 and 1 is redundant and unpredictable
      for (i = 2; i <= min; i++) {
        if (min % i === 0) {
          hits.min.push(i);
        }
      }

      // Again, I apologize for starting at i = 2
      for (i = 2; i <= max; i++) {
        if (max % i === 0) {
          hits.max.push(i);
        }
      }

      for (i = 0; i < hits.max.length; i++) {
        if (hits.min.indexOf(hits.max[i]) !== -1) {
          hits.both.push(hits.max[i]);
        }
      }

      if (hits.both.length === 0) {
        return numberOne * numberTwo;
      } else if (hits.both.length !== 0) {
        return numberOne * numberTwo / hits.both[hits.both.length - 1];
      }
    } else if (numberOne == numberTwo) {
      return numberOne * numberTwo;
    }
  }
};
