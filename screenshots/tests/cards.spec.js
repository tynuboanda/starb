describe("Cards",function(){
  beforeEach(function(){
      browser.url("./index.html")
  })
  it('should be nice', function () {
    var results = browser.checkDocument();

    results.forEach(function (result) {
      expect(result.isWithinMisMatchTolerance).to.equal(true, 'screenshot failure');
    });
  });
});