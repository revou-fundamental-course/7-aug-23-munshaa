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
