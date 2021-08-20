// let mizuki = {
//     hp = 1758,
//     atk = 975,
//     def = 356, 
//     res = 30,
// }

// var mizuki = function () {
//     this.hp = 1758;
//     this.atk = 975;
//     this.def = 356;
//     this.res = 30;
// }
function genOperator(hp, atk, def, res) {
    let operator = {
        hp: hp,
        atk: atk,
        def: def,
        res: res
    }
    return operator
}

testOperator = genOperator(3000, 1000, 100, 0)

let mizuki = {
    hp: 1758,
    atk: 975,
    def: 356,
    res: 30,
    skill3: function () {
        this.atk = Math.floor(this.atk * (1 + 1.5));
    }
}

let enemy = {
    hp: 4000,
    atk: 100,
    def: 100,
    res: 0,
}

function haste2Reduction(x) {
    return x / (100 + x) * 100;
}

function singinzan(def) {
    let atk;
    let baseAtk = 763;
    let sositsu1 = 0.12;
    let skill = 2.0;
    atk = baseAtk;
    atk += Math.floor(baseAtk * sositsu1);
    atk += Math.floor(baseAtk * skill);

    let damage;
    damage = atk * 1;

    damage -= def;

    // number of dealed attacks in activating the skill.
    let duration = 30;
    let asdp = 1.3;
    let numDealing = Math.floor(duration / asdp);

    let sumDamage = damage * numDealing
    return sumDamage
}

function destreza(def, res) {
    let atk;
    let baseAtk = 741;
    let skill = 1.2;
    atk = baseAtk;
    atk += Math.floor(baseAtk * skill)

    let damage = atk * 1;

    damage -= def;

    let duration = 30;
    let asdp = 1.3;
    let skillAsdp = 50;

    asdp *= 100 / (100 + skillAsdp);

    let numDealing = Math.floor(duration / asdp);

    let sumDamage = damage * numDealing;


    let sositsuDot = 125;
    let dotSec = 1;
    sositsuDot *= (100 - res) / 100;
    let numDealingDot = duration / dotSec;
    sumDamage += sositsuDot * numDealingDot

    return sumDamage
}

function buffAtk(atk, baseAtk, ratio) {
    atk += Math.floor(baseAtk * ratio)
    return atk
}

function convertMagicDamge(atk, ratio) {
    physical = atk * (1 - ratio);
    magic = atk * (ratio);
    return physical, magic;
}

function moltengiant(def, res) {
    let atk;
    let baseAtk = 772;
    let skillRatio = 1.2;
    let asdp = 1.25;

    atk = baseAtk;
    atk = buffAtk(atk, baseAtk, skillRatio);

    let damage = {
        physical: atk,
        magic: 0,
        convertMagicDamage: function(ratio) {
            this.magic = this.physical * ratio;
            this.physical *= 1-ratio;
        }
    }
    damage.convertMagicDamage(1)
    

    // Gouka"劫火" penetrates 20(+2) resists.
    damage.magic = Math.floor(damage.magic * (100 - Math.max(0, res - 22)) / 100);
    
    damage.magic = Math.floor(damage.magic * 1.6);

    let duration = 30;
    let numDealing = Math.floor(duration / asdp);

    let sumDamage = damage.magic * numDealing;
    return sumDamage;
}


function ragnarok(def, res) {
    let atk;
    let baseAtk = 772;
    let skillRatio = 3.3;
    let asdp = 1.25;

    atk = baseAtk;
    atk = buffAtk(atk, baseAtk, skillRatio);

    let damage = {
        physical: atk,
        magic: 0,
        convertMagicDamage: function(ratio) {
            this.magic = this.physical * ratio;
            this.physical *= 1-ratio;
        }
    }
    damage.convertMagicDamage(1)
    

    // Gouka"劫火" penetrates 20(+2) resists.
    damage.magic = Math.floor(damage.magic * (100 - Math.max(0, res - 22)) / 100);
    
    let duration = 30;
    let numDealing = Math.floor(duration / asdp);

    let sumDamage = damage.magic * numDealing;
    return sumDamage;
}
// One attack does NOT always deal one damage.
// Damage can be multiple.
let def = 0
let res = 0
console.log(singinzan(def));
console.log(destreza(def, res));
console.log(moltengiant(def, res));
console.log(ragnarok(def, res));