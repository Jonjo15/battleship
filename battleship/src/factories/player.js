function example() {
    return false;
}
const Player = (name, ai) => {
    let turn = null;
    const getName = () => name;
    const isAi = () => ai;
    const setTurn = (bool) => turn = bool;
    const getTurn = () => turn;
    return {getName, isAi, setTurn, getTurn}
}
export {example, Player}