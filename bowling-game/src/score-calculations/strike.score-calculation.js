const strikeScoreCalculation = (data, rand, i) => {
    return data.firstScore[i] === 10 && rand === 1;
}

export default strikeScoreCalculation;
