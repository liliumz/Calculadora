export default class Calculadora {
    constructor(numero1, numero2) {
        this.numero1 = numero1;
        this.numero2 = numero2;
    }

    suma() {
        return this.numero1 + this.numero2;
    }

    resta() {
        return this.numero1 - this.numero2;
    }

    multiplicacion() {
        return this.numero1 * this.numero2;
    }

    division() {
        return this.numero1 / this.numero2;
    }
}