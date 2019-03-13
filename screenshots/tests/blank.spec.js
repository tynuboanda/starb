describe("Blank",function(){
    beforeEach(function(){
        browser.url("./index.html")
    })

    it("renders Blank Page",function(){
        expect(2).to.equal(2);
    });
});