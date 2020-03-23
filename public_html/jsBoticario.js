/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var valorCarrinho = 0;

function somarValorProduto(valor) {
    valorCarrinho = parseFloat(valorCarrinho) + parseFloat(valor);
    var resultadoSplit = valorCarrinho.toString().split(".", 2);
    if (resultadoSplit[1] == null) {
        resultadoSplit[1] = "00";
    }
    var resultado = resultadoSplit[0] + "," + resultadoSplit[1];
    document.getElementById("valorCarrinho").innerHTML = "R$ " + resultado;
}
;

var array = [{
        "name": "Crazy Feelings Des. Colônia Boticollection",
        "images": [{
                "imageUrl": "https://boticario.vteximg.com.br/arquivos/ids/195945/Crazy_Feelings_Desodorante_Colonia_Boticollection_100ml_71877_frontal.jpg?v=636760814659370000"
            }],
        "Value": 137.95
    }, {
        "name": "Kit Presente Elysee Natal",
        "images": [{
                "imageUrl": "https://boticario.vteximg.com.br/arquivos/ids/195989/Kit_Presente_Elysee_Natal_72980_frontal.jpg?v=636760921151200000"
            }],
        "Value": 275.90
    }, {
        "name": "Kit Presente Glamour Natal",
        "images": [{
                "imageUrl": "https://boticario.vteximg.com.br/arquivos/ids/196037/Kit_Presente_Glamour_Natal_72978_frontal.jpg?v=636760946456900000"
            }],
        "Value": 199.90
    }, {
        "name": "Kit Presente Lily Natal",
        "images": [{
                "imageUrl": "https://boticario.vteximg.com.br/arquivos/ids/195985/Kit_Presente_Lily_Natal_72977_frontal.jpg?v=636760836451370000"
            }],
        "Value": 269.0
    }, {
        "name": "Kit Presente Coffee Woman Seduction Natal",
        "images": [{
                "imageUrl": "https://boticario.vteximg.com.br/arquivos/ids/196072/Kit_Presente_Coffee_Woman_Seduction_Natal_72976_frontal.jpg?v=636761726877670000"
            }],
        "Value": 179.90
    }, {
        "name": "Combo Egeo Red: Des. Colônia + Antitranspirante Aerosol",
        "images": [{
                "imageUrl": "https://boticario.vteximg.com.br/arquivos/ids/192650-500-500/Combo_Egeo_Red_Des_Colonia_Antitranspirante_Aerosol_90420185_frontal.jpg?v=636585244165570000"
            }],
        "Value": 103.84
    }]
function criaImagem(idImagem,valor) {
    var stringImagem = document.createElement("img");
    stringImagem.src = array[valor].images[0].imageUrl;
    stringImagem.width = 250;
    stringImagem.height = 280;
    document.getElementById(idImagem).appendChild(stringImagem);
    
}
function criarNome(idNome,valor){
    var stringTexto = array[valor].name;
    document.getElementById(idNome).innerHTML=stringTexto;
}
function criarValor(idValor,valor){
    var stringTexto = "R$ "+array[valor].Value;
    document.getElementById(idValor).innerHTML=stringTexto;
}
function getValorProduto(posicaoArray) {
    somarValorProduto(array[posicaoArray].Value);
}



