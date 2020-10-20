import {Ship} from "./ship"
function example() {
    return false;
}

const Gameboard = (arg) => {
    let board = new Array(10).fill(new Array(10).fill(null))
    const ships = [Ship(2), Ship(2), Ship(3), Ship(3), Ship(4), Ship(5)]
    //
    const fillBoard = (ship, index) => {
        let length = ship.getLength()
        let foundEmptySpace = false
        while (!foundEmptySpace) {
            let x = Math.floor(Math.random() * 10);
            let y = Math.floor(Math.random() * 10 - length);
            let potentialCoordinates = []
            for (let i = 0; i < length; i++) {
                potentialCoordinates.push(board[x][y+i])
            }
            if (potentialCoordinates.every(ele => ele === null)) {
                potentialCoordinates.forEach((ele, i) => {
                    board[x][y+i] = [index, i]
                })
                foundEmptySpace = true;
            }
        }
    }
    //ships.forEach()
    //
    //const checkIfPositionValid = ()
    let missedAttacks = 0;
    const receiveAttack = (x,y) => {
        if (board[x][y] === "X" || board[x][y] === true) {
            return false;
        }
        if (board[x][y] == null) {
            missedAttacks +=1;
            board[x][y] = "X";
        }
        else {
            //find out which ship and which part, use .hit
            //hit ship
            board[x][y] = true;
        }
    }
    const getBoard = () => board
    const getShips = () => ships
    const getMissedAttacks = () => missedAttacks    
    const allShipsSunk = () => ships.every(ship => ship.isSunk())
    return {getMissedAttacks, receiveAttack, fillBoard, getShips, getBoard, allShipsSunk}
}
export {example, Gameboard}