import isStrikeCalculation from "../score-calculations/is-strike.calculation";
import isSpareCalculation from "../score-calculations/is-spare.calculation";

const thirdTryRule = (data, rand, i) => {
    return isStrikeCalculation(data, rand, i) || isSpareCalculation(data, rand, i);
}
export default thirdTryRule;
