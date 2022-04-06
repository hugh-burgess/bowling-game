import './App.css';
import {GiBowlingPin} from "react-icons/gi";
import {ImCross} from "react-icons/im";
import {BsFillSquareFill, BsSlashLg} from "react-icons/bs";

function BowlingGame() {

    const arrayOfRounds = {
        round: [],
        firstScore: Number,
        totalScorePerRound: [],
        cumulatedScore: [],
        maxFromFirstScoreArray: [],
        randLeftoverAttemptArray: [],
    };

    for (let i = 0; i <= 9; i++) {
        arrayOfRounds.round.push(i);
        arrayOfRounds.firstScore = Array.from({length: 10}, () => Math.floor(Math.random() * 10));

        const maxFromFirstScore = Math.abs(arrayOfRounds.firstScore[i]  - 10);
        let randLeftoverAttempt = Math.random();
        randLeftoverAttempt = Math.floor( randLeftoverAttempt * maxFromFirstScore);
        arrayOfRounds.maxFromFirstScoreArray.push(maxFromFirstScore);
        arrayOfRounds.randLeftoverAttemptArray.push(randLeftoverAttempt);
    }

    return (
        <div>
            <table>
                <tr>
                    {arrayOfRounds.round.map((i, index) => {

                        const maxFromFirstScore = Math.abs(arrayOfRounds.firstScore[i]  - 10);
                        let randLeftoverAttempt = Math.random();
                        randLeftoverAttempt = Math.floor( randLeftoverAttempt * maxFromFirstScore);
                        arrayOfRounds.maxFromFirstScoreArray.push(maxFromFirstScore);
                        arrayOfRounds.randLeftoverAttemptArray.push(randLeftoverAttempt);
                        arrayOfRounds.totalScorePerRound.push(arrayOfRounds.firstScore[i] + randLeftoverAttempt);

                        const cumulativeSum = (sum => value => sum += value)(0);

                        arrayOfRounds.cumulatedScore = arrayOfRounds.totalScorePerRound.map(cumulativeSum);

                        const pin = arrayOfRounds.firstScore[i] === 9 && randLeftoverAttempt < 10;
                        const blank = arrayOfRounds.firstScore[i] === 1 && randLeftoverAttempt === 1;
                        const strike = arrayOfRounds.firstScore[i] === 10 && randLeftoverAttempt === 1;
                        const spare = arrayOfRounds.firstScore[i] + randLeftoverAttempt === 10;
                        return (
                            <th key={index}>
                                {arrayOfRounds.firstScore[i]} ·
                                {pin ? <GiBowlingPin/>
                                : blank ? <BsFillSquareFill/>
                                : strike ? <ImCross/>
                                : spare ? <BsSlashLg/>
                                : randLeftoverAttempt}

                                {arrayOfRounds.round[i] === 9 && (strike || spare) && 'third'}
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
