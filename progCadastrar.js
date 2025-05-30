let carregar = document.getElementById('carregar')
let cadastrar = document.getElementById('cadastrar')
let res = document.getElementById('res')
let resA = document.getElementById('resA')

let nome = document.getElementById('nome')
let preco = document.getElementById('preco')
let quantidade = document.getElementById('quantidade')
let descricao = document.getElementById('descricao')
let marca = document.getElementById('marca')
let imagem = document.getElementById('imagem')

carregar.addEventListener('click', (e) => {
    e.preventDefault()
    let codigo = Number(document.getElementById('codigo').value)

    nome.value = " "
    preco.value = " "
    quantidade.value = " "
    descricao.value = " "
    marca.value = " "
    imagem.value = " "

    fetch(`https://api.npoint.io/6fcef59b3ee83ba68d20`)
        .then(resp => resp.json())
        .then(dados => {
            console.log(dados)
            dados.forEach(dad => {
                if (dad.codigo === codigo) {
                    nome.value = dad.nome
                    preco.value = dad.preco
                    quantidade.value = dad.quantidade
                    descricao.value = dad.descricao
                    marca.value = dad.marca
                    imagem.value = dad.imagem
                }
            })
        })
        .catch((err) => {
            console.error('Erro ao buscar os dados', err)
        })
})

cadastrar.addEventListener('click', (e)=>{
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

    fetch(`http://localhost:8081/produto`,{
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(valores)
    })
    .then(resp => resp.json())
    .then(dadosGrav => {
        console.log(dadosGrav)
        
            res.innerHTML +=`<hr>`
            res.innerHTML +=`Produto Cadastrado com Sucesso!<br><br>`
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