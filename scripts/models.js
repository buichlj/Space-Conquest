function Fleet(owner, location, remainingTransit, ships) {
    this.owner = owner;
    this.location = location;
    this.remainingTransit = remainingTransit;
    this.ships = ships;
}

function Ships(fighter, shotgunBoat) {
    this.fighter = fighter;
    this.shotgunBoat = shotgunBoat;
}

function Player(id) {
    this.id = id;
    this.credits = 0;

}

function SpaceLane(planetFrom, planetTo, transitTime) {
    this.planetFrom = planetFrom;
    this.planetTo = planetTo;
    this.transitTime = transitTime;
}

// ShipType Enum
const ShipType = {
    Fighter: "Fighter",
    ShotgunBoat: "ShotgunBoat"
};

class Ship {
    constructor(count, name, attack, hp, phase, durability, cost, techLevel, specialAttack) {
        this.count = count;
        this.name = name;
        this.attack = attack;
        this.hp = hp;
        this.phase = phase;
        this.durability = durability;
        this.cost = cost;
        this.techLevel = techLevel;
        this.specialAttack = specialAttack;
    }
}

class FighterShip extends Ship {
    constructor(count) {
        super(count, ShipType.Fighter, 7, 5, 3, 5, 25, 7, 0);
    }
}

class ShotGunBoatShip extends Ship {
    constructor(count) {
        super(count, ShipType.ShotGunBoatShip, 10, 3, 2, 5, 50, 7, 0);
    }
}