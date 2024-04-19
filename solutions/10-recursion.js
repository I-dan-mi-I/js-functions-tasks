const sequenceSum = (begin, end) => {
    // BEGIN
    if (typeof begin !== 'number' || typeof end !== 'number' || begin > end)
        return NaN;
    if (begin === end)
        return begin;
    return begin + sequenceSum(begin + 1, end);
    // END
};

export default sequenceSum;
  