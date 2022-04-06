import './App.css';
import {GiBowlingPin} from "react-icons/gi";
import {ImCross} from "react-icons/im";
import {BsFillSquareFill, BsSlashLg} from "react-icons/bs";
import dataArray from "./models/data-array-model";
import populateData from "./services/populateData.service";
import maxFromFirstScore from "./components/max-from-first-score.component";
import cumulativeSum from "./services/cumulative-sum.service";
import pinScoreCalculation from "./score-calculations/pin.score-calculation";
import blankScoreCalculation from "./score-calculations/blank.score-calculation";
import strikeScoreCalculation from "./score-calculations/strike.score-calculation";
import spareScoreCalculation from "./score-calculations/spare.score-calculation";
import thirdTryRule from "./rule/third-try.rule";

function BowlingGame() {

    const arrayOfRounds = dataArray();

    for (let i = 0; i <= 9; i++) {
        populateData(arrayOfRounds, i);
    }

    return (
        <div>
            <table>
                <tr>
                    {arrayOfRounds.round.map((i, index) => {
                        let randLeftoverAttempt = Math.floor( Math.random() * maxFromFirstScore(arrayOfRounds, i));
                        arrayOfRounds.maxFromFirstScoreArray.push(maxFromFirstScore(arrayOfRounds, i));
                        arrayOfRounds.randLeftoverAttemptArray.push(randLeftoverAttempt);
                        arrayOfRounds.totalScorePerRound.push(arrayOfRounds.firstScore[i] + randLeftoverAttempt);
                        arrayOfRounds.cumulatedScore = arrayOfRounds.totalScorePerRound.map(cumulativeSum());
                        arrayOfRounds.thirdAttempt = Math.floor(Math.random() * 10);
                        return (
                            <th key={index}>
                                {arrayOfRounds.firstScore[i]} ·
                                {pinScoreCalculation(arrayOfRounds, randLeftoverAttempt, i) ? <GiBowlingPin/>
                                : blankScoreCalculation(arrayOfRounds, randLeftoverAttempt, i) ? <BsFillSquareFill/>
                                : strikeScoreCalculation(arrayOfRounds, randLeftoverAttempt, i) ? <ImCross/>
                                : spareScoreCalculation(arrayOfRounds, randLeftoverAttempt, i) ? <BsSlashLg/>
                                : randLeftoverAttempt}

                                {arrayOfRounds.round[i] === 9
                                && thirdTryRule(arrayOfRounds, randLeftoverAttempt, i)
                                && arrayOfRounds.thirdAttempt}
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
