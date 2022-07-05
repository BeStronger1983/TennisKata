export class Tennis {
    firstPlayerScoreTimes = 0;

    scoreLookup = {
        0: 'love',
        1: 'fifteen',
        2: 'thirty',
        3: 'forty',
    };
    secondPlayerScoreTimes = 0;

    score() {
        if (this.secondPlayerScoreTimes !== this.firstPlayerScoreTimes) {
            return `${this.scoreLookup[this.firstPlayerScoreTimes]} ${this.scoreLookup[this.secondPlayerScoreTimes]}`;
        }
        return `${this.scoreLookup[this.firstPlayerScoreTimes]} all`;
    }

    firstPlayerScore() {
        this.firstPlayerScoreTimes++;
    }

    secondPlayerScore() {
        this.secondPlayerScoreTimes++;
    }
}