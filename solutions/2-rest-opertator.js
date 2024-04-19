import _ from 'lodash';

// BEGIN
/**
 * @param {number[]} nums
 */
const average = (...nums) => {
    if (nums.length === 0)
        return null;
    return _.sum(nums) / nums.length;
}

export default average;
// END