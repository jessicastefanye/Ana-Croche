// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function() {
    
    console.log("Site de Crochê Carregado!");

    // Exemplo de interatividade futura:
    // Um alerta quando o cliente clica em "Comprar Agora"
    const buyButtons = document.querySelectorAll('.btn-buy');
    
    buyButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Impede que o link mude de página por enquanto
            alert("Para comprar, integre com um sistema de pagamento!");
        });
    });

});
// Função para o filtro de produtos na página de produtos
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    // Verifica se os botões de filtro existem na página atual
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove a classe 'active' de todos os botões
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Adiciona a classe 'active' ao botão clicado
                this.classList.add('active');

                const filter = this.dataset.filter;

                productCards.forEach(card => {
                    // Esconde o card para a animação
                    card.classList.add('hide');

                    // Mostra o card novamente se ele corresponder ao filtro
                    if (filter === 'all' || card.dataset.category === filter) {
                        // Usamos um pequeno timeout para a animação de "fade" funcionar
                        setTimeout(() => {
                           card.classList.remove('hide');
                        }, 10);
                    }
                });
            });
        });
    }
});