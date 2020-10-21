import {Ship} from "./ship"
function example() {
    return false;
}

const Gameboard = (arg) => {
    let board = new Array(10).fill(new Array(10).fill(null))
    const ships = [Ship(2, 0), Ship(2, 1), Ship(3, 2), Ship(3, 3), Ship(4, 4), Ship(5, 5)]
    //
    const fillBoard = (ship, index, horizontal) => {
        let length = ship.getLength()
        let foundEmptySpace = false
        while (!foundEmptySpace) {
            let x = null;
            let y = null;
            if (horizontal) {
                [x, y] = getCoordsForHorizontal(length)
            }
            else {
                [x, y] = getCoordsForVertical(length)
            }
            let potentialCoordinates = []
            for (let i = 0; i < length; i++) {
                if (horizontal) {
                    potentialCoordinates.push(board[x][y+i])
                }
                else {
                    potentialCoordinates.push(board[x+i][y]);
                }
                
            }
            if (potentialCoordinates.every(ele => ele === null)) {
                potentialCoordinates.forEach((ele, i) => {
                    if (horizontal) {
                        board[x][y+i] = [ship.getId(), i]
                    }
                    else {
                        board[x+i][y] = [ship.getId(), i]
                    }
                    
                })
                foundEmptySpace = true;
            }
        }
    }
   
    const getCoordsForHorizontal = (length) => {
        let x = Math.floor(Math.random() * 10);
        let y = Math.floor(Math.random() * 10 - length);
        return [x, y]
    }
    const getCoordsForVertical = (length) => {
        let x = Math.floor(Math.random() * 10 - length);
        let y = Math.floor(Math.random() * 10);
        return [x, y]
    }
    let missedAttacks = 0;
    const receiveAttack = (x,y) => {
        if (board[x][y] === "X" || board[x][y] === true) {
            return false;
        }
        if (board[x][y] == null) {
            missedAttacks +=1;
            board[x][y] = "X";
            return true
        }
        else {
            //find out which ship and which part, use .hit
            //hit ship
            board[x][y] = true;
            return true;
        }
    }
    const getBoard = () => board
    const getShips = () => ships
    const getMissedAttacks = () => missedAttacks    
    const allShipsSunk = () => ships.every(ship => ship.isSunk())
    return {getMissedAttacks, receiveAttack, fillBoard, getShips, getBoard, allShipsSunk}
}
export {example, Gameboard}