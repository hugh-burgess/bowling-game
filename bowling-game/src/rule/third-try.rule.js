import strikeScoreCalculation from "../score-calculations/strike.score-calculation";
import spareScoreCalculation from "../score-calculations/spare.score-calculation";

const thirdTryRule = (data, rand, i) => {
    return strikeScoreCalculation(data, rand, i) || spareScoreCalculation(data, rand, i);
}
export default thirdTryRule;
