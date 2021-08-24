let atk = 772;
let aspd = 1.25;
surtr = {
    baseAtk: atk,
    baseAspd: aspd,
    atk: atk,
    aspd: aspd,
    atkPowerTimes: 100,
    atkTimes: 1,
    penetrateDef: 0,
    penetrateRes: 0,
    magic: 100,
    true: 0,
    talent1: function () {
        this.penetrateRes = 22;
    },
    skill3: function () {
        this.atk += Math.round(this.baseAtk * 330 / 100);
    },
    dealAttack: function () {
        let attack = {
            physical: Math.floor(this.atk * this.atkPowerTimes / 100),
            magic: 0,
            true: 0,
            atkTimes: this.atkTimes,
            penetrateDef: this.penetrateDef,
            penetrateRes: this.penetrateRes,
            calcDamage: function (target) {
                let physicalDamage = Math.max(1, this.physical - Math.max(0, target.def - this.penetrateDef));
                let magicDamage = this.magic * 100 / (100 + Math.max(0, target.res - this.penetrateRes));
                let trueDamage = this.true;
                let damage = physicalDamage + magicDamage + trueDamage;
                damage *= this.atkTimes
                return damage
            }
        }
        return attack;
    }
}

atk = 634;
exusiai = {
    baseAtk: atk,
    baseAspd: 1,
    atk: atk,
    aspd: 1,
    atkPowerTimes: 100,
    atkTimes: 1,
    penetrateDef: 0,
    penetrateRes: 0,
    talent1: function () {
        this.aspd -= this.baseAspd * 15 / 100;
    },
    talent2: function () {
        this.atk = Math.floor(this.atk + this.baseAtk * 8 / 100);
    },
    skill3: function () {
        // Deals 110% of ATK
        this.aspd -= 0.22;
        this.atkPowerTimes = 110;
        this.atkTimes = 5;
    },

    dealAttack: function () {
        let attack = {
            physical: Math.floor(this.atk * this.atkPowerTimes / 100),
            magic: 0,
            true: 0,
            atkTimes: this.atkTimes,
            penetrateDef: this.penetrateDef,
            penetrateRes: this.penetrateRes,
            calcDamage: function (target) {
                let physicalDamage = Math.max(1, this.physical - Math.max(0, target.def - this.penetrateDef));
                let magicDamage = this.magic * 100 / (100 + Math.max(0, target.res - this.penetrateRes));
                let trueDamage = this.true;
                let damage = physicalDamage + magicDamage + trueDamage;
                damage *= this.atkTimes
                return damage
            }
        }
        return attack
    }
}

walfarin = {
    skill2: function (target) {
        target.atk += Math.floor(target.baseAtk * 90 / 100)
    }
}

a = {
    skill3: function (target) {
        target.atk += Math.floor(target.baseAtk * 50 / 100);
        target.as -= target.baseAspd * 50 / 100;
    }
}

testE = {
    hp: 100000,
    def: 100,
    res: 0,
    totalDamageTaken: 0,
    takeDamage: function (damage) {
        this.hp -= damage;
        this.totalDamageTaken += damage;
    }
}

hexedColossus = {
    atk: 3600,
    aspd: 7,
    hp: 150000,
    recovery: 0,
    def: 800,
    res: 40,
    weight: 5,
    ms: 0.4,
    range: 0,
    stun: false,
    silence: false,
}

mudrockColossus = {
    type: 'Elite',
    atk: 3000,
    aspd: 7,
    hp: 100000,
    def: 700,
    res: 30,
}

exusiai.talent1();
exusiai.talent2();
walfarin.skill2(exusiai);
a.skill3(exusiai);
exusiai.skill3();

let duration = 15;
times = function (unit) {
    return Math.floor(duration / unit.aspd);
}

for (let i = 0; i < times(exusiai); i++) {
    let attack = exusiai.dealAttack();
    testE.takeDamage(attack.calcDamage(mudrockColossus));
}

console.log(testE);

surtr.talent1()
surtr.skill3()

console.log(surtr.atk)