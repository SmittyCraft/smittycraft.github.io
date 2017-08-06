var $math = {
  random: function () {
    return {
      between: function (min, max) {
        return Math.floor(Math.random() * ((max - min) + 1));
      },
      
      basic: function () {
        return Math.random();
      }
    };
  },
  
  findLCM: function (numberOne, numberTwo) {
    if (numberOne !== numberTwo) {
      var i = 0;
      var max = 0;
      var min = 0;
      var hits = [];
      
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
