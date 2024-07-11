export default class ICalculadora{
    constructor(){
        this._num1 = 0;
        this._num2 = 0;
    }

    set num1(n){
        this._num1 = +n;
    }

    set num2(n){
        this._num2 = +n;
    }

    get num1(){
        return this._num1;
    }

    get num2(){
        return this._num2;
    }

    leerNum1(){
        return prompt("Ingrese el primer numero");
    }

    leerNum2(){
        return prompt("Ingrese el segundo numero");
    }

    leerOperacion(){
        return prompt("Ingrese la operacion");
    }

    sumar(){
        return this._num1 + this._num2;
    }

    restar(){
        return this._num1 - this._num2;
    }

    multiplicar(){
        return this._num1 * this._num2;
    }

    dividir(){
        return this._num1 / this._num2;
    }

}