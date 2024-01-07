class Hero {

    constructor(nameHero, score) {
        this.nameHero = nameHero;
        this.experience = score;
    }

    rank(name, score) {

        if (score <= 1000) {
            return `O Herói de nome ${name} está no nível Ferro`;
        }

        if (score > 1000 && score <= 2000) {
            return `O Herói de nome ${name} está no nível Bronze`;
        }

        if (score > 2000 && score <= 5000) {
            return `O Herói de nome ${name} está no nível Prata`;
        }

        if (score > 5000 && score <= 7000) {
            return `O Herói de nome ${name} está no nível Ouro`;
        }

        if (score > 7000 && score <= 8000) {
            return `O Herói de nome ${name} está no nível Platina`;
        }

        if (score > 8000 && score <= 9000) {
            return `O Herói de nome ${name} está no nível Ascendente`;
        }

        if (score > 9000 && score <= 10000) {
            return `O Herói de nome ${name} está no nível Imortal`;
        }

        if (score >= 10001) {
            return `O Herói de nome ${name} está no nível Radiante`;
        }

    }
}

let nameHero = 'Ronaldo';
let score = 5001;

const hero1 = new Hero();

const player = hero1.rank(nameHero, score);

console.log(player);