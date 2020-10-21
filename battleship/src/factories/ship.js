function example() {
    return false;
}
const Ship = (length, id) => {
    let nonHitPositions = length
    // eslint-disable-next-line no-array-constructor
   let hitArray = new Array(length).fill(false)
   const getLength = () => length;
    const hit = (position) => {
        hitArray[position] = true
        nonHitPositions -= 1;
        return hitArray
    }
    const isSunk = () => {
        if (nonHitPositions === 0) {
            return true;
        }
        return false
    }
    const getId = () => id;
    return {getLength, hit, isSunk, getId}
}
export {example, Ship}