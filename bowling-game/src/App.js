import './App.css';
import {GiBowlingPin} from "react-icons/gi";
import {ImCross} from "react-icons/im";
import {BsFillSquareFill, BsSlashLg, BsDashLg} from "react-icons/bs";
import dataArray from "./models/data-array-model";
import populateData from "./services/populateData.service";
import maxFromFirstScore from "./components/max-from-first-score.component";
import cumulativeSum from "./services/cumulative-sum.service";
import isPinCalculation from "./score-calculations/is-pin.calculation";
import isBlankCalculation from "./score-calculations/is-blank.calculation";
import isStrikeCalculation from "./score-calculations/is-strike.calculation";
import isSpareCalculation from "./score-calculations/is-spare.calculation";
import thirdTryRule from "./rule/third-try.rule";
import isMissCalculation from "./score-calculations/is-miss-calculation";
import RoundEnumeration from "./enumerations/roundEnumeration";

function BowlingGame() {

    const arrayOfRounds = dataArray();

    for (let i = 0; i <= RoundEnumeration.LAST_ROUND; i++) {
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
                                {isMissCalculation(arrayOfRounds.firstScore[i]) ? <BsDashLg/> : arrayOfRounds.firstScore[i]} · {
                                isPinCalculation(arrayOfRounds, randLeftoverAttempt, i) ? <GiBowlingPin/>
                                : isBlankCalculation(arrayOfRounds, randLeftoverAttempt, i) ? <BsFillSquareFill/>
                                : isStrikeCalculation(arrayOfRounds, randLeftoverAttempt, i) ? <ImCross/>
                                : isSpareCalculation(arrayOfRounds, randLeftoverAttempt, i) ? <BsSlashLg/>
                                : isMissCalculation(randLeftoverAttempt) ? <BsDashLg/>
                                : randLeftoverAttempt}

                                {arrayOfRounds.round[i] === RoundEnumeration.LAST_ROUND
                                && thirdTryRule(arrayOfRounds, randLeftoverAttempt, i)
                                && arrayOfRounds.thirdAttempt}
                            </th>
                        )
                    })}
                </tr>
                <tr>
                    {arrayOfRounds.cumulatedScore.map((item, index) => {
                        let randLeftoverAttempt = Math.floor( Math.random() * maxFromFirstScore(arrayOfRounds, item));
                        let lastElement = arrayOfRounds.cumulatedScore[arrayOfRounds.cumulatedScore.length - 1];
                        return (
                            <th key={index}>{
                                thirdTryRule(arrayOfRounds, randLeftoverAttempt, item)
                                    ? lastElement + arrayOfRounds.thirdAttempt
                                    : item
                            }</th>
                        )
                    })}
                </tr>
            </table>
        </div>
    );
}

export default BowlingGame;
