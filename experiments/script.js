const produtos = {
    "123": {"nome": "Suco de Tamarindo", "preco": 10.50},
    "456": {"nome": "Guarana JESUS", "preco": 20.50},
    "789": {"nome": "Barreado de Pato-Branco", "preco": 1.50},
    "147": {"nome": "Goiaba", "preco": 1.50},
};

let carrinho = [];

const audio = new Audio("bip.mp3");

function addProduto() {
    const codElemento = document.getElementById("cod");
    const qtdElemento = document.getElementById("qtd");
    const codValue = codElemento.value;
    const qtdValue = parseInt(qtdElemento.value);  // Convert to number

    if (!produtos[codValue]) {
        alert("Produto não Cadastrado");
        return;
    }
    const produtoBase = produtos[codValue];
    const item = {
        nome: produtoBase.nome,
        preco: produtoBase.preco,
        quantidade: qtdValue,
        subtot: produtoBase.preco * qtdValue
    };
    carrinho.push(item);
    
    // Update UI
    atualizarCarrinho();
    
    audio.currentTime = 0;
    audio.play();
    
    // Clear inputs
    codElemento.value = "";
    qtdElemento.value = "";
    codElemento.focus();
}

function atualizarCarrinho() {
    const lista = document.getElementById("lista");
    const totalSpan = document.getElementById("total");
    lista.innerHTML = "";  // Clear list
    let total = 0;
    carrinho.forEach(item => {
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = `${item.quantidade}x ${item.nome} - R$ ${item.subtot.toFixed(2)}`;
        lista.appendChild(li);
        total += item.subtot;
    });
    totalSpan.textContent = total.toFixed(2).replace(".", ",");  // Format as 0,00
}

window.onload = () => {
    document.getElementById("cod").focus();
};