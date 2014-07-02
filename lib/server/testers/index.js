var toarray = require("toarray");

var testers = [
  require("./percentage"),
  require("./match")
]


module.exports = function () {
  return {
    create: function (test) {
      return groupTester(toarray(test).map(function (options) {
        var t = [], ops;
        for (var i = testers.length; i--;) {
          if (ops = testers[i].options(options)) t.push(testers[i].create(ops));
        }
        return t.length > 1 ? groupTester(t) : t[0];
      }));
    }
  }
}


function groupTester (testers) {
  return function (options) {
    for (var i = testers.length; i--;) {
      if (!testers[i](options)) return false;
    }
    return true;
  }
}
