import {Gameboard} from "./gameboard"
function example() {
    return false;
}
const Player = (name, ai) => {
    let turn = null;
    const getName = () => name;
    const isAi = () => ai;
    const setTurn = (bool) => turn = bool;
    const getTurn = () => turn;
    const getRandomCoords = () => {
        let x = Math.floor(Math.random() * 10);
        let y = Math.floor(Math.random() * 10);
        return [x, y]

    }
    const AiAttack = (gameboard) => {
        let [x, y] = getRandomCoords();
        let success = false;
        while (!success) {
            success = gameboard.receiveAttack(x, y)
        }
        // if (gameboard.getBoard()[x][y] === "X" || gameboard.getBoard()[x][y] === true) {
        //     return false;
        // }
        // gameboard.receiveAttack(x, y)
        return true;
    }
    return {getName, isAi, setTurn, getTurn, getRandomCoords, AiAttack}
}
export {example, Player}