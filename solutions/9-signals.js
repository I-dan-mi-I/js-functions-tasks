import get from 'lodash/get.js';

const freeEmailDomains = [
    'gmail.com',
    'yandex.ru',
    'hotmail.com',
    'yahoo.com',
];

// BEGIN
/**
 * @param {string[]} emailsArray
 */
const getFreeDomainsCount = (emailsArray) => {
    let counter = {};

    if (Array.isArray(emailsArray) && emailsArray.length !== 0) {
        for (const email of emailsArray) {

            let domain = email.split('@')[1];

            if (!freeEmailDomains.includes(domain))
                continue;

            counter[domain] = (counter[domain] ?? 0) + 1;
        }
    }

    return counter;
}

export default getFreeDomainsCount;
// END