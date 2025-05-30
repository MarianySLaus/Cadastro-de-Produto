let consultar = document.getElementById('consultar')
let res = document.getElementById('res')
let resA = document.getElementById('resA')

consultar.addEventListener('click', () => {
    let codigo = Number(document.getElementById('codigo').value)

    res.innerHTML = ' '
    resA.innerHTML = ' '

    fetch(`http://localhost:8081/produto/${codigo}`)
        .then(resp => resp.json())
        .then(dadosGrav => {
            console.log(dadosGrav)
            
                res.innerHTML +=`<hr>`
                res.innerHTML +=`Consulta do Produto<br><br>`
                resA.innerHTML +=
              `<img src="${dadosGrav.imagem}" alt="${dadosGrav.nome}">
                <div class="card-atualizar">
                    <h3>${dadosGrav.nome}</h3>
                    <p class="price">R$ ${dadosGrav.preco.toFixed(2)}</p>
                    <p><strong>Quantidade:</strong> ${dadosGrav.quantidade}</p>
                    <p><strong>Marca:</strong> ${dadosGrav.marca}</p>
                    <p>${dadosGrav.descricao}</p>
                </div>`
        })
        .catch((err) => {
            console.error('Erro ao listar os dados!', err)
        })
})

function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
}