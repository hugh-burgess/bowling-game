const populateData = (data, i) => {
    data.round.push(i);
    data.firstScore = Array.from({length: 10}, () => Math.floor(Math.random() * 10));

    const maxFromFirstScore = Math.abs(data.firstScore[i]  - 10);
    let randLeftoverAttempt = Math.random();
    randLeftoverAttempt = Math.floor( randLeftoverAttempt * maxFromFirstScore);
    data.maxFromFirstScoreArray.push(maxFromFirstScore);
    data.randLeftoverAttemptArray.push(randLeftoverAttempt);
};
export default populateData;
