// BEGIN
/**
 * @param {number[][]} dateArrays
 */
const convertDateArrays = (...dateArrays) => {
    let returnArray = [];

    for (const dateArray of dateArrays)
        returnArray.push((new Date(...dateArray)).toDateString());

    return returnArray;
}

export default convertDateArrays;
// END