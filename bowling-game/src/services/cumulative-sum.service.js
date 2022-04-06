const cumulativeSum = () => {
    return (sum => value => sum += value)(0);
}
export default cumulativeSum;
