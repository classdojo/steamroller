var steamroller = require("../../lib/browser"),
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
  });

  it("can create a domain", function () {
      steamroller().domain("teach.classdojo.com");
  });

  it("caches a domain", function () {
    var sr = steamroller();
    var domain = sr.domain("abc");
    domain.i = 1;
    expect(sr.domain("abc").i).to.be(1);
  })

  it("can register apps in the first arg of a domain", function () {

  });
});
