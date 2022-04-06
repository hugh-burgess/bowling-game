const isMissCalculation = (data, rand, i) => {
    return data.firstScore[i] === 0 && rand === 0;
}
export default isMissCalculation;
