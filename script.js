function process(quant, index){
    var value = parseInt(document.getElementById("quant" + index).value);
    value+=quant;
    if(value < 1){
        document.getElementById("quant" + index).value = 1;
    }else{
        document.getElementById("quant" + index).value = value;
    }
}

function validarDados() {
    var nome = document.getElementById("name");
    var telefone = document.getElementById("phone");
    var email = document.getElementById("email");

    if (nome.value == "") {
        alert("Nome não informado");
        nome.focus();
        return true;
    }

    if (telefone.value == "") {
        alert("Telefone não informado");
        telefone.focus();
        return true;
    }
    
    if (email.value == "") {
        alert("E-mail não informado");
        email.focus();
        return true;
    }

    return false;
}


var name = "";

function newFunction() {
    $("#btn-mensagem").click(function () {
        $("#modal-mensagem").modal();
    });
}

function enviarDados() {
    if (validarDados() == true) {
         return;
    }

    var div = document.getElementById('info-pedido');

    div.style.width = '790px';
    div.style.maxHeight = '500px';
    div.style.background = '#E6C9F9';
    div.style.borderRadius = '5px';
    div.style.padding = "5px";

    let prato1 = document.getElementById('nomePrato1').innerText;
    const precoPrato1 = 8.00;

    let prato2 = document.getElementById('nomePrato2').innerText;
    const precoPrato2 = 15.00;

    let prato3 = document.getElementById('nomePrato3').innerText;
    const precoPrato3 = 18.00;

    let prato4 = document.getElementById('nomePrato4').innerText;
    const precoPrato4 = 10.00;

    let prato5 = document.getElementById('nomePrato5').innerText;
    const precoPrato5 = 15.00;

    let prato6 = document.getElementById('nomePrato6').innerText;
    const precoPrato6 = 12.00;

    totalItem1 = document.getElementById("quant1").value * precoPrato1;
    totalItem2 = document.getElementById("quant2").value * precoPrato2;
    totalItem3 = document.getElementById("quant3").value * precoPrato3;
    totalItem4 = document.getElementById("quant4").value * precoPrato4;
    totalItem5 = document.getElementById("quant5").value * precoPrato5;
    totalItem6 = document.getElementById("quant6").value * precoPrato6;
       

    if (totalItem1 > 0) {
        document.getElementById('pedido1').innerHTML = `<li> Prato:  ${prato1} - Preço Unitário: R\$ ${precoPrato1} - Quantidade: ${quant1.value} - Total R\$ ${totalItem1}</li>`;
    }

    if (totalItem2 > 0) {
        document.getElementById('pedido2').innerHTML = `<li> Prato:  ${prato2} - Preço Unitário: R\$ ${precoPrato2} - Quantidade: ${quant2.value} - Total R\$ ${totalItem2}</li>`;
    }

    if (totalItem3 > 0) {
        document.getElementById('pedido3').innerHTML = `<li> Prato:  ${prato3} - Preço Unitário: R\$ ${precoPrato3} - Quantidade: ${quant3.value} - Total R\$ ${totalItem3}</li>`;
    }

    if (totalItem4 > 0) {
        document.getElementById('pedido4').innerHTML = `<li> Prato:  ${prato4} - Preço Unitário: R\$ ${precoPrato4} - Quantidade: ${quant4.value} - Total R\$ ${totalItem4}</li>`;
    }

    if (totalItem5 > 0) {
        document.getElementById('pedido5').innerHTML = `<li> Prato:  ${prato5} - Preço Unitário: R\$ ${precoPrato5} - Quantidade: ${quant5.value} - Total R\$ ${totalItem5}</li>`;
    }

    if (totalItem6 > 0) {
        document.getElementById('pedido6').innerHTML = `<li> Prato:  ${prato6} - Preço Unitário: R\$ ${precoPrato6} - Quantidade: ${quant6.value} - Total R\$ ${totalItem6}</li>`;
    }

    var precoFinal = totalItem1 + totalItem2 + totalItem3 + totalItem4 + totalItem5 + totalItem6;

    name = document.getElementById('name').value;
    document.getElementById('saudacao').innerHTML = `Caro(a) <b>${name}</b>`;
    document.getElementById('dados-pedido').innerHTML = "Segue os dados do seu pedido.";
    document.getElementById('pedido-final').innerHTML = "O seu pedido é: ";
    document.getElementById('precoFinal').innerHTML = `<b> Preço Final R$ ${precoFinal}</b>`;     
}