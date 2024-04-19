const run = (text) => {
    // BEGIN
    /**
     * @param {string} sourceString
     * @param {number} charCount
     */
    const takeLast = (sourceString, charCount) => {
        if (typeof sourceString !== 'string' || typeof charCount !== 'number' || sourceString.length < charCount)
            return null;

        return sourceString.split('').slice(sourceString.length - charCount).reverse().join('');
    }
    // END

    return takeLast(text, 4);
};

export default run;