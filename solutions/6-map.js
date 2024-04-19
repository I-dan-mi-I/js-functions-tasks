// BEGIN
/**
 * @param {object[]} parents
 */
const getChildren = (parents) => {
    if (!Array.isArray(parents) || parents.length === 0)
        return [];

    let childrenArray = parents.map((parent) =>
        parent.hasOwnProperty('children') && Array.isArray(parent['children']) ?
            parent['children'] : []
    )

    return childrenArray.flat();
}

export default getChildren;
// END