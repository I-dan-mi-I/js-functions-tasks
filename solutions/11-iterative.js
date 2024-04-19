const smallestDivisor = (num) => {
    // BEGIN
    if (typeof num !== 'number' || num < 0)
        return 1;

    let divisor = num;

    for (let i = 2; i < num; i++)
        if (num % i === 0) {
            divisor = i;
            break;
        }

    return divisor;
    // END
};

export default smallestDivisor;
  