const Ship = require("../ship");

const testShip = new Ship(3);

test("analyzes the hit function of the ship class", () => {
    testShip.hit();
    expect(testShip.timesHit).toBe(1);
})

test("analyzes the hit function of the ship class", () => {
    testShip.hit();
    expect(testShip.timesHit).toBe(2);
})

test("analyzes the hit and the isSunk function of the ship class", () => {
    testShip.hit();
    expect(testShip.sunk).toBe(true);
})