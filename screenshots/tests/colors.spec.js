describe("Colors",function(){
  beforeEach(function(){
      browser.url("./index.html")
  })
  it('should work', function () {
    var results = browser.checkDocument();

    results.forEach(function (result) {
      expect(result.isWithinMisMatchTolerance).to.equal(true, 'screenshot failure');
    });
  });
});