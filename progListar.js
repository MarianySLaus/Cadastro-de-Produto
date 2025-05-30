fetch('http://localhost:8081/produto')
    .then(resp => resp.json()
)
    .then(data => {
        const lista = document.getElementById('lista');

        data.forEach(produto => {
            const card = document.createElement('div');
            card.className = 'card';

            card.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <div class="card-content">
                <h3>${produto.nome}</h3>
                <p class="price">R$ ${produto.preco.toFixed(2)}</p>
                <p><strong>Quantidade:</strong> ${produto.quantidade}</p>
                <p><strong>Marca:</strong> ${produto.marca}</p>
                <p>${produto.descricao}</p>
            </div>
        `;
            lista.appendChild(card);
        });
    })
    .catch(error => {
        console.error('Erro:', error);
        const lista = document.getElementById('product-list');
        lista.innerHTML = `<p>Erro ao carregar produtos.</p>`;
    });

    function toggleMenu() {
        const menu = document.getElementById('menu');
        menu.classList.toggle('show');
    }