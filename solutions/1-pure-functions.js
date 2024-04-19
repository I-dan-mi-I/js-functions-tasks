// BEGIN
/**
 * @param {number} value
 */
const isPrime = (value) => {
    if (typeof value !== 'number' || value <= 1 || !Number.isInteger(value))
        return false;

    for (let i = 2; i <= Math.sqrt(value); i++)
        if (value % i === 0)
            return false;
    return true;
}

/**
 * @param {number} value
 */
const sayPrimeOrNot = (value) => {
    isPrime(value) ? console.log('yes') : console.log('no')
};

export default sayPrimeOrNot;
// END