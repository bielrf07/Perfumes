let carrinho = [];

function adicionarAoCarrinho(produto, preco) {
    // Adiciona o produto ao carrinho com seu preço
    carrinho.push({ nome: produto, preco: preco });
    atualizarCarrinho(); // Atualiza a lista de itens no carrinho e o total
    alert(produto + " foi adicionado ao seu carrinho!");
}

function atualizarCarrinho() {
    const carrinhoLista = document.getElementById('carrinho-lista');
    carrinhoLista.innerHTML = '';  // Limpar lista do carrinho antes de adicionar

    let total = 0;

    // Exibe os itens do carrinho
    carrinho.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        carrinhoLista.appendChild(li);
        total += item.preco;  // Calcula o total
    });

    // Exibe o valor total no carrinho
    document.getElementById('total').textContent = total.toFixed(2);
}

function finalizarCompra() {
    if (carrinho.length > 0) {
        const totalCompra = carrinho.reduce((acc, item) => acc + item.preco, 0);
        alert(`Finalizando a compra dos seguintes itens: \n${carrinho.map(item => item.nome).join(', ')}\nTotal: R$ ${totalCompra.toFixed(2)}`);
        carrinho = [];  // Limpa o carrinho após a finalização
        atualizarCarrinho();  // Atualiza a interface do carrinho
    } else {
        alert('Seu carrinho está vazio!');
    }
}

// Filtro de pesquisa para mostrar produtos conforme o usuário digita
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