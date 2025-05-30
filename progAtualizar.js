let atualizar = document.getElementById('atualizar')
let consultar = document.getElementById('consultar')
let resA = document.getElementById('resA')
let res = document.getElementById('res')

let codigo = document.getElementById('codigo')
let nome = document.getElementById('nome')
let preco = document.getElementById('preco')
let quantidade = document.getElementById('quantidade')
let descricao = document.getElementById('descricao')
let marca = document.getElementById('marca')
let imagem = document.getElementById('imagem')

consultar.addEventListener('click', (e) => {
    e.preventDefault()
    codigo = Number(document.getElementById('codigo').value)

    res.innerHTML = ' '
    resA.innerHTML = ' '

    fetch(`http://localhost:8081/produto/${codigo}`)
        .then(resp => resp.json())
        .then(dado => {
            console.log(dado)
            nome.value = dado.nome
            preco.value = dado.preco
            quantidade.value = dado.quantidade
            descricao.value = dado.descricao
            marca.value = dado.marca
            imagem.value = dado.imagem
            
        })
        .catch((err) => {
            console.error('Erro ao listar os dados!', err)
        })

    
})

atualizar.addEventListener('click', (e)=>{
    e.preventDefault()
    const valores = {
        nome: nome.value,
        preco: preco.value,
        quantidade: quantidade.value,
        descricao: descricao.value,
        marca: marca.value,
        imagem: imagem.value
    }

    console.log(valores)


    res.innerHTML = ' '
    resA.innerHTML = ' '

    fetch(`http://localhost:8081/produto/${codigo}`,{
        method: 'PUT',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(valores)
    })
    .then(resp => resp.json())
    .then(dadosGrav => {
        console.log(dadosGrav)
        
            res.innerHTML +=`<hr>`
            res.innerHTML +=`Produto Atualizado com Sucesso!<br><br>`
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
    .catch((err)=>{
        console.error('Erro ao gravar os dados no banco de dados!',err)
    })

})

function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
}