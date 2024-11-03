// Função para atualizar o preço total de cada produto baseado na quantidade
function atualizarPrecoTotal(produtoLinha) {
    const quantidade = produtoLinha.querySelector('.quantidade').value;
    const precoUnico = parseFloat(produtoLinha.querySelector('.precoUnico').innerText.replace('R$', '').replace(',', '.'));
    const precoTotal = quantidade * precoUnico;

    produtoLinha.querySelector('.precoTotal').innerText = `R$ ${precoTotal.toFixed(2).replace('.', ',')}`;
}

function calcularTotalFinal() {
    let totalFinal = 0;
    const produtos = document.querySelectorAll('tbody tr');

    produtos.forEach(produtoLinha => {
        const precoTotal = parseFloat(produtoLinha.querySelector('.precoTotal').innerText.replace('R$', '').replace(',', '.'));
        totalFinal += precoTotal;
    });

    document.getElementById('totalGeral').innerText = `R$ ${totalFinal.toFixed(2).replace('.', ',')}`;
}

// Evento para recalcular o total sempre
const quantidades = document.querySelectorAll('.quantidade');

quantidades.forEach(quantidade => {
    quantidade.addEventListener('input', function() {
        const produtoLinha = this.closest('tr');
        atualizarPrecoTotal(produtoLinha);
        calcularTotalFinal();
    });
});

// função para tirar porduto do carrinho
function removerProduto(produtoLinha) {
    produtoLinha.remove();
    calcularTotalFinal();
}

// Evento remover produto
const removerBotoes = document.querySelectorAll('.removerProduto');

removerBotoes.forEach(botao => {
    botao.addEventListener('click', function() {
        const produtoLinha = this.closest('tr');
        removerProduto(produtoLinha);
    });
});

// Chama a função pra calcular o total final
calcularTotalFinal();
