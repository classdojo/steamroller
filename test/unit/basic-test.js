var steamroller = require("../.."),
expect = require("expect.js");

describe("unit/basic#", function () {

  it("can create a new steamroller", function () {
    steamroller();
  });

  it("can use plugins", function () {
    var i = 0;
    steamroller().use(function (){
      i++;
    }, function () {
      expect(i).to.be(1);
      i++;
    });

    expect(i).to.be(2);
  })
});
