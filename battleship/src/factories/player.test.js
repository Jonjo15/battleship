import {example, Player} from "./player"

test("works", () => {
    expect(example()).toBe(false)
})
test("player name works", () => {
    expect(Player("ivan", false).getName()).toBe("ivan");
})
// test("getCurrentTurn works", () => {
//     let ivan = Player("ivan")
// })
test("AI check works", () => {
    expect(Player("ivan", false).isAi()).toBe(false);
})
test("if turn is not set equal to null", () => {
    expect(Player("ivan",false).getTurn()).toBe(null)
})
test("turn is set to true", () => {
    let player = Player("a", false)
    player.setTurn(true)
    expect(player.getTurn()).toBe(true)
})