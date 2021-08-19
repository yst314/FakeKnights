class Operator{
    constructor(id, name, rarity, potential, elite, trust, level, hp, atk, def, res, redep, cost, block, asdp) {
        this.id = id;
        this.name = name;
        this.rarity = rarity;
        this.potential = potential;
        this.elite = elite;
        this.trust = trust;
        this.level = level;
        this.hp = hp;
        this.atk = atk;
        this.def = def;
        this.res = res;
        this.redep = redep;
        this.cost = cost;
        this.block = block;
        this.asdp = asdp;
    }
}

let mizuki = new Operator(
    'mizuki', 
    'Mizuki', 
    6, 
    2, 
    200, 
    90, 
    1758, 
    975, 
    356, 
    30, 
    70,
    21,
    0,
    3.5,
    0);

console.log(mizuki);
