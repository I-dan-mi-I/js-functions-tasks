// BEGIN


/**
 * @param {object[]} groupingObjects
 * @param {string} property
 */
const groupBy = (groupingObjects, property) => {
    const processingFunction = (acc, _object) => {
        if (!acc.hasOwnProperty(_object[property]))
            acc[_object[property]] = [];
        acc[_object[property]].push(_object);
        return acc;
    }

    if (!Array.isArray(groupingObjects) || groupingObjects.length === 0 || property == null)
        return {};

    return groupingObjects.reduce(processingFunction, {});
}

export default groupBy;
// END