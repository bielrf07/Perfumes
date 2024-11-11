let carrinho = [];

function adicionarAoCarrinho(produto, preco) {
    carrinho.push({ nome: produto, preco: preco });
    atualizarCarrinho();
    alert(produto + " foi adicionado ao seu carrinho!");
}

function atualizarCarrinho() {
    const carrinhoLista = document.getElementById('carrinho-lista');
    carrinhoLista.innerHTML = '';  // Limpar lista antes de adicionar

    let total = 0;

    carrinho.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        carrinhoLista.appendChild(li);
        total += item.preco;
    });

    document.getElementById('total').textContent = total.toFixed(2);
}

function finalizarCompra() {
    if (carrinho.length > 0) {
        alert(`Finalizando a compra dos seguintes itens: \n${carrinho.map(item => item.nome).join(', ')}\nTotal: R$ ${carrinho.reduce((acc, item) => acc + item.preco, 0).toFixed(2)}`);
        carrinho = [];
        atualizarCarrinho();
    } else {
        alert('Seu carrinho está vazio!');
    }
}

// Filtro de pesquisa
document.getElementById('search-bar').addEventListener('input', function() {
    const termo = this.value.toLowerCase();
    const produtos = document.querySelectorAll('.produto');

    produtos.forEach(produto => {
        const nomeProduto = produto.dataset.nome.toLowerCase();
        if (nomeProduto.includes(termo)) {
            produto.style.display = '';
        } else {
            produto.style.display = 'none';
        }
    });
});