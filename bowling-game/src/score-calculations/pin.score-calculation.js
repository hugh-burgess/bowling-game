const pinScoreCalculation = (data, rand, i) => {
    return data.firstScore[i] === 9 && rand < 10;
}

export default pinScoreCalculation;
