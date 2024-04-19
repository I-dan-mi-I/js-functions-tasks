// BEGIN
/**
 * @param {object[]} people
 */
const getGirlFriends = (people) => {
    if (!Array.isArray(people) || people.length === 0)
        return [];

    let friendsArray = people.map((human) =>
        human.hasOwnProperty('friends') && Array.isArray(human['friends']) ?
            human['friends'] : []
    )

    return friendsArray.flat().filter(({gender}) => gender === "female");
}

export default getGirlFriends;
// END