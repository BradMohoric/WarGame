var expect = chai.expect;

describe('Deal cards function', function(){
    describe('dealCards', function(){
        it('should deal 52 cards', function(){
            var x = dealCards(newDeck);
            expect(x).to.equal(newDeck.length);
        });

        it('should throw an error if hands are dealt uneven', function(){
            expect(function(){
                dealCards(playerOne.hand.length > 26 || playerTwoDeck.length > 26);
            }).to.throw(Error);
        });
    });
});