import {Tennis} from "./tennis";

describe('score', function () {
    beforeEach(() => {
        tennis = new Tennis('Joey', 'Tom');
    });
    let tennis = new Tennis('Joey', 'Tom');

    function scoreShouldBe(expected) {
        expect(tennis.score()).toBe(expected);
    }

    it('should be love all', function () {
        scoreShouldBe('love all');
    });

    it('should be fifteen love', function () {
        givenFirstPlayerScoreTimes(1);
        scoreShouldBe('fifteen love');
    });

    function givenFirstPlayerScoreTimes(times) {
        for (let i = 0; i < times; i++) {
            tennis.firstPlayerScore();
        }
    }

    it('should be thirty love', function () {
        givenFirstPlayerScoreTimes(2);
        scoreShouldBe('thirty love');
    });

    it('should be forty love', function () {
        givenFirstPlayerScoreTimes(3);
        scoreShouldBe('forty love');
    });

    it('should be love fifteen', function () {
        givenSecondPlayerScoreTimes(1);
        scoreShouldBe('love fifteen');
    });

    function givenSecondPlayerScoreTimes(times) {
        for (let i = 0; i < times; i++) {
            tennis.secondPlayerScore();
        }
    }

    it('should be love thirty', function () {
        givenSecondPlayerScoreTimes(2);
        scoreShouldBe('love thirty');
    });

    it('should be fifteen all', function () {
        givenFirstPlayerScoreTimes(1);
        givenSecondPlayerScoreTimes(1);
        scoreShouldBe('fifteen all');
    });

    it('should be thirty all', function () {
        givenFirstPlayerScoreTimes(2);
        givenSecondPlayerScoreTimes(2);
        scoreShouldBe('thirty all');
    });

    function givenDeuce() {
        givenFirstPlayerScoreTimes(3);
        givenSecondPlayerScoreTimes(3);
    }

    it('should be deuce', function () {
        givenDeuce();
        scoreShouldBe('deuce');
    });

    it('should be first player adv', function () {
        givenDeuce();
        givenFirstPlayerScoreTimes(1);
        scoreShouldBe('Joey adv');
    });

    it('should be second player adv', function () {
        givenDeuce();
        givenSecondPlayerScoreTimes(1);
        scoreShouldBe('Tom adv');
    });

    it('should be second player win', function () {
        givenDeuce();
        givenSecondPlayerScoreTimes(2);
        scoreShouldBe('Tom win');
    });
});