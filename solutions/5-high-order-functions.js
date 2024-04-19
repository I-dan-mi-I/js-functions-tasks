import _ from 'lodash';

// BEGIN
/**
 * @param {object[]} users
 * @param {number} count
 */
const takeOldest = (users, count = 1) => {
    if (!Array.isArray(users) || users.length === 0 || count < 1)
        return null;

    let usersCopy = _.sortBy(users, (entry) => {
        return Date.parse(entry["birthday"]);
    });

    return usersCopy.slice(0, count);
}

export default takeOldest;
// END