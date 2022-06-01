import {Tennis} from "./tennis";

describe('score', function () {
    beforeEach(() => {
        tennis = new Tennis('Joey');
    });
    let tennis = new Tennis('Joey');
    it('should be love all', function () {
        expect(tennis.score()).toBe('love all');
    });

    it('should be fifteen love', function () {
        givenFirstPlayerScoreTimes(1);
        expect(tennis.score()).toBe('fifteen love');
    });

    function givenFirstPlayerScoreTimes(times) {
        for (let i = 0; i < times; i++) {
            tennis.firstPlayerScore();
        }
    }

    it('should be thirty love', function () {
        givenFirstPlayerScoreTimes(2);
        expect(tennis.score()).toBe('thirty love');
    });

    it('should be forty love', function () {
        givenFirstPlayerScoreTimes(3);
        expect(tennis.score()).toBe('forty love');
    });

    it('should be love fifteen', function () {
        givenSecondPlayerScoreTimes(1);
        expect(tennis.score()).toBe('love fifteen');
    });

    function givenSecondPlayerScoreTimes(times) {
        for (let i = 0; i < times; i++) {
            tennis.secondPlayerScore();
        }
    }

    it('should be love thirty', function () {
        givenSecondPlayerScoreTimes(2);
        expect(tennis.score()).toBe('love thirty');
    });

    it('should be fifteen all', function () {
        givenFirstPlayerScoreTimes(1);
        givenSecondPlayerScoreTimes(1);
        expect(tennis.score()).toBe('fifteen all');
    });

    it('should be thirty all', function () {
        givenFirstPlayerScoreTimes(2);
        givenSecondPlayerScoreTimes(2);
        expect(tennis.score()).toBe('thirty all');
    });

    function giveDeuce() {
        givenFirstPlayerScoreTimes(3);
        givenSecondPlayerScoreTimes(3);
    }

    it('should be deuce', function () {
        giveDeuce();
        expect(tennis.score()).toBe('deuce');
    });

    it('should be first player adv', function () {
        giveDeuce();
        givenFirstPlayerScoreTimes(1);
        expect(tennis.score()).toBe('Joey adv');
    });

    it('should be second player adv', function () {
        giveDeuce();
        givenSecondPlayerScoreTimes(1);
        expect(tennis.score()).toBe('Tom adv');
    });




});