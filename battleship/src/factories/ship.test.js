import {example, Ship} from "./ship"
test("works", () => {
    expect(example()).toBe(false)
})
test("length", () => {
    expect(Ship(4).getLength()).toBe(4)
})
test("hit1", () => {
    expect(Ship(4).hit(0)).toStrictEqual([true,false,false,false])
})
test("hit2", () => {
    expect(Ship(5).hit(4)).toStrictEqual([false,false,false,false,true])
})
test("it doesnt say ship is sunk without gettingHit", () => {
    expect(Ship(4).isSunk()).toBe(false);
})
test("gets hit but it isnt sunk", () => {
    let ship = Ship(3)
    ship.hit(1);
    expect(ship.isSunk()).toBe(false);
})
test("gets hit multiple times but it isnt sunk", () => {
    let ship = Ship(3)
    ship.hit(1);
    ship.hit(2);
    expect(ship.isSunk()).toBe(false);
})
test("ship of three length gets hit 3 times, it sinks", () => {
    let ship = Ship(3)
    ship.hit(0)
    ship.hit(1);
    ship.hit(2);
    expect(ship.isSunk()).toBe(true);
})
test("ship of length of one, gets hit, sinks", () => {
    let ship = Ship(1)
    ship.hit(0);
    expect(ship.isSunk()).toBe(true)
} )