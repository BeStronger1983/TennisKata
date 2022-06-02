export class Tennis {
    constructor(firstPlayerName, secondPlayerName) {
        this.firstPlayerName = firstPlayerName;
        this.secondPlayerName = secondPlayerName;
    }

    firstPlayerScoreTimes = 0;

    scoreLookup = {
        0: 'love',
        1: 'fifteen',
        2: 'thirty',
        3: 'forty',
    };
    secondPlayerScoreTimes = 0;

    firstPlayerName;

    secondPlayerName;

    score() {
        return this.isScoreDifferent()
            ? this.isReadyForGamePoint() ? this.advState() : this.lookupScore()
            : this.isDeuce() ? this.deuce() : this.sameScore();
    }

    advState() {
        if (this.isAdv()) {
            return this.advScore();
        }
        return this.winScore();
    }

    isReadyForGamePoint() {
        return this.firstPlayerScoreTimes > 3 || this.secondPlayerScoreTimes > 3;
    }

    winScore() {
        return `${this.advPlayer()} win`;
    }

    advScore() {
        return `${this.advPlayer()} adv`;
    }

    isAdv() {
        return Math.abs(this.firstPlayerScoreTimes - this.secondPlayerScoreTimes) === 1;
    }

    advPlayer() {
        let advPlayer = this.firstPlayerScoreTimes > this.secondPlayerScoreTimes ? this.firstPlayerName : this.secondPlayerName;
        return advPlayer;
    }

    isScoreDifferent() {
        return this.secondPlayerScoreTimes !== this.firstPlayerScoreTimes;
    }

    lookupScore() {
        return `${this.scoreLookup[this.firstPlayerScoreTimes]} ${this.scoreLookup[this.secondPlayerScoreTimes]}`;
    }

    isDeuce() {
        return this.firstPlayerScoreTimes >= 3;
    }

    deuce() {
        return 'deuce';
    }

    sameScore() {
        return `${this.scoreLookup[this.firstPlayerScoreTimes]} all`;
    }

    firstPlayerScore() {
        this.firstPlayerScoreTimes++;
    }

    secondPlayerScore() {
        this.secondPlayerScoreTimes++;
    }
}