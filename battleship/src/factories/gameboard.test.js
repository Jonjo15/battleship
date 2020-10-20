import {example, Gameboard} from "./gameboard"

test("works", () => {
    expect(example()).toBe(false)
})
test("missed attempts work(1)", () => {
   let game = Gameboard()
   game.receiveAttack(0,0);
   expect(game.getMissedAttacks()).toBe(1)
})
test("missed attempts work(2)", () => {
    let game = Gameboard()
    game.receiveAttack(0,0);
    game.receiveAttack(0,1);
    expect(game.getMissedAttacks()).toBe(2)
 })
 test("getShips works", () => {
     let game = Gameboard()
     expect(game.getShips().length).toBe(6)
 } )
//  test("getShips works", () => {
//     let game = Gameboard()
//      game.getShips().forEach((ship, i) => {
//         game.fillBoard(ship, i)
//     })
//     console.log(game.getBoard)
//     expect(game.getShips().length).toBe(6)
//  } )
test("can access ships length through getShips", () => {
    let game = Gameboard()
    expect(game.getShips()[0].getLength()).toBe(2)
})
test("shows an X at the position of the missed attempt", () => {
    let game = Gameboard()
    game.receiveAttack(0,0)
    expect(game.getBoard()[0][0]).toBe("X");
});
test("receive attack returns false if coordinate already marked", () => {
    let game = Gameboard()
    game.receiveAttack(0,0)
    expect(game.receiveAttack(0,0)).toBe(false);
})
test("returns that not all ships sunk at the beggining", () => {
    let game = Gameboard()
    expect(game.allShipsSunk()).toBe(false)
})