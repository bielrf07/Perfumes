let carrinho = [];

function adicionarAoCarrinho(produto) {
    carrinho.push(produto);
    atualizarCarrinho();
    alert(produto + " foi adicionado ao seu carrinho!");
}

function atualizarCarrinho() {
    const carrinhoLista = document.getElementById('carrinho-lista');
    carrinhoLista.innerHTML = '';  // Limpar lista antes de adicionar

    carrinho.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        carrinhoLista.appendChild(li);
    });
}

function finalizarCompra() {
    if (carrinho.length > 0) {
        alert('Finalizando a compra dos seguintes itens: \n' + carrinho.join(', '));
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