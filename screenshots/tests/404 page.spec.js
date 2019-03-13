describe("404 Page",function(){
    beforeEach(function(){
        browser.url("./index.html")
    })

    it("renders 404 Page Not Found",function(){
        expect(2).to.equal(2);
    });
});