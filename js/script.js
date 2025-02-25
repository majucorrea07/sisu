
function calcularCursos(){

    const valor1 = document.getElementById('natureza').value;
    const valor2 = document.getElementById('humanas').value;
    const valor3 = document.getElementById('linguagens').value;
    const valor4 = document.getElementById('matematica').value;
    const valor5 = document.getElementById('redacao').value;

    //processamento

    let media = (parseFloat(valor1) + parseFloat(valor2) + parseFloat(valor3) + parseFloat(valor4) + parseFloat(valor5)) / 5;

    alert(media)
    if (media >= 750){
        alert("Medicina, Engenharia Aeronautica e Direito");
    }
     else if(media  >= 600 && media < 750){
        alert("Engenharia Civil, Administração, Psicologia");
    }
    else if(media >= 450 && media < 600){
        alert("Pedagogia, Letras, Ciências Sociais");
        }
        else{
            alert("Infelizmente, sua nota está abaixo da nota de corte mínima");
        }
    }