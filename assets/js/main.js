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