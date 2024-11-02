//criando classe
class Bicicleta {
    constructor(aro, pedal) {
        this.aro = aro;
        this.pedal = pedal;
    }
}

//primeira classe herdeira
class Fixa extends Bicicleta {
    constructor(aro, pedal, guidao) {
        super(aro, pedal);
        this.guidao = guidao;
    }
}

//segunda classe herdeira
class Single extends Bicicleta {
    constructor(aro, pedal, marcha) {
        super(aro, pedal);
        this.marcha = marcha;
    }
}

//instâncias de Bicicleta: Fixa e Single
const caixinha = new Fixa(24, 'fixo', 'drop');
const caloi = new Single(26, 'livre', true);
const praiana = new Single(29, 'livre', false)


console.log(caixinha);
console.log(caloi);
console.log(praiana);



