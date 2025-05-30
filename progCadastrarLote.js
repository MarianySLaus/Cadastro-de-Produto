let cadastrarLote = document.getElementById('cadastrarLote')
let res2 = document.getElementById('res2')


cadastrarLote.addEventListener('click', (e) => {
    e.preventDefault()


    fetch(`https://api.npoint.io/6fcef59b3ee83ba68d20`)
        .then(resp => resp.json())
        .then(dados => {
            console.log(dados)
            dados.forEach(dad => {
                fetch(`http://localhost:8081/produto`,{
                    method: 'POST',
                    headers: {
                        'Content-Type':'application/json'
                    },
                    body: JSON.stringify(dad)
                })
                .then(resp => resp.json())
                .then(dadosGrav => {
                    console.log(dadosGrav)
                        res2.innerHTML += `<hr>`
                        res2.innerHTML += `Nome: ${dadosGrav.nome} <br>`
                        res2.innerHTML += `Preço: R$ ${dadosGrav.preco} <br>`
                        res2.innerHTML += `Quantidade: ${dadosGrav.quantidade} <br>`
                        res2.innerHTML += `Descrição: ${dadosGrav.descricao} <br>`
                        res2.innerHTML += `Marca: ${dadosGrav.marca} <br>`
                        res2.innerHTML += `${dadosGrav.imagem} <br>`
                })
                .catch((err)=>{
                    console.error('Erro ao gravar os dados no banco de dados!',err)
                })
            })
        })
        .catch((err) => {
            console.error('Erro ao buscar os dados', err)
        })
})

function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
}

