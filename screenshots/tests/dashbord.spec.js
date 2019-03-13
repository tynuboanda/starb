describe("Dashboard",function(){
    beforeEach(function(){
        browser.url("./index.html")
    })

    it("renders Dashboard Page",function(){
        expect(2).to.equal(2);
    });
});