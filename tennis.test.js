import {Tennis} from "./tennis";

describe('score', () => {
    beforeEach(() => {
        tennis = new Tennis('Joey', 'Tom');
    });
    let tennis = new Tennis('Joey', 'Tom');

    function scoreShouldBe(expected) {
        expect(tennis.score()).toBe(expected);
    }

    it('should be love all', () => {
        scoreShouldBe('love all');
    });

    it('should be fifteen love', () => {
        givenFirstPlayerScoreTimes(1);
        scoreShouldBe('fifteen love');
    });

    function givenFirstPlayerScoreTimes(times) {
        for (let i = 0; i < times; i++) {
            tennis.firstPlayerScore();
        }
    }

    it('should be thirty love', () => {
        givenFirstPlayerScoreTimes(2);
        scoreShouldBe('thirty love');
    });

    it('should be forty love', () => {
        givenFirstPlayerScoreTimes(3);
        scoreShouldBe('forty love');
    });

    it('should be love fifteen', () => {
        givenSecondPlayerScoreTimes(1);
        scoreShouldBe('love fifteen');
    });

    function givenSecondPlayerScoreTimes(times) {
        for (let i = 0; i < times; i++) {
            tennis.secondPlayerScore();
        }
    }

    it('should be love thirty', () => {
        givenSecondPlayerScoreTimes(2);
        scoreShouldBe('love thirty');
    });

    it('should be fifteen all', () => {
        givenFirstPlayerScoreTimes(1);
        givenSecondPlayerScoreTimes(1);
        scoreShouldBe('fifteen all');
    });

    it('should be thirty all', () => {
        givenFirstPlayerScoreTimes(2);
        givenSecondPlayerScoreTimes(2);
        scoreShouldBe('thirty all');
    });

    function givenDeuce() {
        givenFirstPlayerScoreTimes(3);
        givenSecondPlayerScoreTimes(3);
    }

    it('should be deuce', () => {
        givenDeuce();
        scoreShouldBe('deuce');
    });

    it('should be first player adv', () => {
        givenDeuce();
        givenFirstPlayerScoreTimes(1);
        scoreShouldBe('Joey adv');
    });

    it('should be second player adv', () => {
        givenDeuce();
        givenSecondPlayerScoreTimes(1);
        scoreShouldBe('Tom adv');
    });

    it('should be second player win', () => {
        givenDeuce();
        givenSecondPlayerScoreTimes(2);
        scoreShouldBe('Tom win');
    });
});