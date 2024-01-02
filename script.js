function imc(){
    magreza.style.background = "";
    normal.style.background = "";
    sobrepeso.style.background = "";
    obesidade.style.background = "";
    obesidadeGrave.style.background = "";
    
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Por favor, insira valores válidos para peso e altura.");
        return;
    }
    
    var resultado = peso / (altura*altura);

    if (resultado < 18.5){
        magreza.style.background = "lightgreen";

    } else if (resultado < 25){
        normal.style.background = "lightgreen";

    } else if (resultado < 30){
        sobrepeso.style.background = "lightgreen";

    } else if (resultado < 40){
        obesidade.style.background = "lightgreen";

    }else{
        obesidadeGrave.style.background = "lightgreen";       
    }

    document.getElementById('resultado').innerHTML = `Seu IMC é ${resultado.toFixed(1)}`;

}


