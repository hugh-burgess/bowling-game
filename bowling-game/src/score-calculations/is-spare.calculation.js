const isSpareCalculation = (data, rand, i) => {
    return data.firstScore[i] + rand === 10;
}

export default isSpareCalculation;
