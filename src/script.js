let lengthUnit;
let result;
let shapesOperation;
let setDisplay;
let outputDescText = document.innerHTML;

function hitungluas(){
    alas= document.getElementById("alas").value;
    tinggi= document.getElementById("tinggi").value;
    luas=1/2*alas*tinggi;
    document.getElementById("luas").value=luas;
}
function hitungkeliling(){
    sisi1= document.getElementById("sisi1").value;
    sisi2= document.getElementById("sisi2").value;
    sisi3= document.getElementById("sisi3").value;
    keliling=parseInt(sisi1)+parseInt(sisi2)+parseInt(sisi3);
    document.getElementById("keliling").value=keliling;
}
class Segitiga {
    constructor (a, t, b) {
        this.a = a
        this.t = t
        this.b = b
    };
    kelilingSegitiga () {
        result = this.a + this.b + this.t;
        result = result.toPrecision(3)
        outputDescText = `K = a + b + t <br> K = ${this.a} + ${this.b} + ${this.t} <br> K = ${result} ${lengthUnit}`;
        outputDesc.innerHTML = outputDescText;
        kelilingOutput();
    };
    luasSegitiga () {
        result = (this.a * this.t) / 2;
        result = result.toPrecision(3)
        outputDescText = `L = a x t ÷ 2 <br> L = ${this.a} x ${this.t} ÷ 2 <br> L = ${result} ${lengthUnit}<sup>2</sup>`;
        outputDesc.innerHTML = outputDescText;
        luasOutput();
    };
};