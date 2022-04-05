import './App.css';

function BowlingGame() {

    const arrayOfRounds = {
        round: [],
        firstScore: Number,
        secondScore: Number,
        totalScorePerRound: [],
        cumulatedScore: [],
    };

    for (let i = 0; i <= 9; i++) {
        arrayOfRounds.round.push(i);
        arrayOfRounds.firstScore = Array.from({length: 10}, () => Math.floor(Math.random() * 10));
        arrayOfRounds.secondScore = Array.from({length: 10}, () => Math.floor(Math.random() * 10));
    }
    arrayOfRounds.totalScorePerRound = arrayOfRounds.firstScore.map(function (num, idx) {
        return num + arrayOfRounds.secondScore[idx];
    });

    const cumulativeSum = (sum => value => sum += value)(0);

    arrayOfRounds.cumulatedScore = arrayOfRounds.totalScorePerRound.map(cumulativeSum);

    return (
        <div>
            <table>
                <tr>
                    {arrayOfRounds.round.map((i, index) => {
                        return (
                            <th key={index}>
                                {arrayOfRounds.firstScore[i]} · {
                                arrayOfRounds.firstScore[i] === 9 && arrayOfRounds.secondScore[i] < 10
                                ? 'P'
                                : arrayOfRounds.firstScore[i] === 1 && arrayOfRounds.secondScore[i] === 1
                                ? ''
                                : arrayOfRounds.firstScore[i] === 10 && arrayOfRounds.secondScore[i] === 1
                                ? 'X'
                                : arrayOfRounds.firstScore[i] + arrayOfRounds.secondScore[i] === 10
                                ? '/'
                                : arrayOfRounds.secondScore[i]}
                            </th>
                        )
                    })}
                </tr>
                <tr>
                    {arrayOfRounds.cumulatedScore.map((item, index) => {
                        return (
                            <th key={index}>{item}</th>
                        )
                    })}
                </tr>
            </table>
        </div>
    );
}

export default BowlingGame;
