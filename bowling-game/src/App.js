import './App.css';

function BowlingGame() {

    const arrayOfRounds = {
        round: [],
        firstScore: Number,
        secondScore: Number,
        totalScorePerRound: [],
    };

    for (let i = 0; i <= 9; i++) {
        arrayOfRounds.round.push(i);
        arrayOfRounds.firstScore = Array.from({length: 10}, () => Math.floor(Math.random() * 5));
        arrayOfRounds.secondScore = Array.from({length: 10}, () => Math.floor(Math.random() * 5));
    }
    arrayOfRounds.totalScorePerRound = arrayOfRounds.firstScore.map(function (num, idx) {
        return num + arrayOfRounds.secondScore[idx];
    });

    console.log(arrayOfRounds);


    const gameScores =
        <table>
            <tr>
                {arrayOfRounds.round.map((i, index)=>{
                    console.log("firstScore ", arrayOfRounds.firstScore[i]);
                    return (
                        <th key={index}>
                            {arrayOfRounds.firstScore[i]}
                            |
                            {arrayOfRounds.secondScore[i]}
                        </th>
                    )
                })}
            </tr>
            <tr>
                {arrayOfRounds.totalScorePerRound.map((item, index)=>{
                    return (
                        <th key={index}>round total: {item}</th>
                    )
                })}
            </tr>
        </table>;


    return (
        <div>
            {gameScores}
        </div>
    );
}

export default BowlingGame;
