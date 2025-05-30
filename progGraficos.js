const grafBarras = document.getElementById('grafBarras')

let vetProd = []
let vetQtde = []

    vetProd = []
    vetQtde = []

    fetch(`http://localhost:8081/produto`)
    .then(resp => resp.json())
    .then(dados => {
        console.log(dados)
        
        dados.forEach(dad => {
            vetProd.push(dad.nome)
            vetQtde.push(dad.quantidade)
        })
        console.log('vetProd = ',vetProd)
        console.log('vetQtde = ',vetQtde)

        Chart.defaults.color = '#000000'
        Chart.defaults.font.size = 28


        if(Chart.getChart(grafBarras)){
            Chart.getChart(grafBarras).destroy()
        }
    
        
        new Chart(grafBarras, {
            type: 'bar',
            data: {
                labels: vetProd, // nomes do produto
                datasets: [{
                    // label: 'Produto',
                    data: vetQtde,  // quantidade ou preço
                    borderWidth: 3,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 205, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(153, 102, 255, 0.2)'
                    ],
                    borderColor: [
                        'rgb(251, 135, 160)',
                        'rgb(255, 159, 64)',
                        'rgb(255, 205, 86)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)',
                        'rgb(153, 102, 255)'
                    ],
                }]
            },
            options:{
                plugins:{
                    legend: {
                        display: false
                    }
                }
            }
        })
    })
    .catch((err)=>{
        console.error('Erro ao listar os dados!',err)
    })

    const grafPie = document.getElementById('grafPie')

     vetProd = []
    let vetPreco = []
    
        vetProd = []
        vetPreco = []
    
        fetch(`http://localhost:8081/produto`)
        .then(resp => resp.json())
        .then(dados => {
            console.log(dados)
            
            dados.forEach(dad => {
                vetProd.push(dad.nome)
                vetPreco.push(dad.preco)
            })
            console.log('vetProd = ',vetProd)
            console.log('vetPreco = ',vetPreco)
    
            Chart.defaults.color = '#000000'
            Chart.defaults.font.size = 28
    
    
            if(Chart.getChart(grafPie)){
                Chart.getChart(grafPie).destroy()
            }
        
            
            new Chart(grafPie, {
                type: 'pie',
                data: {
                    labels: vetProd, // nomes do produto
                    datasets: [{
                        // label: 'Produto',
                        data: vetPreco,  // quantidade ou preço
                        borderWidth: 3,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 205, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(153, 102, 255, 0.2)'
                        ],
                        borderColor: [
                            'rgb(251, 135, 160)',
                            'rgb(255, 159, 64)',
                            'rgb(255, 205, 86)',
                            'rgb(75, 192, 192)',
                            'rgb(54, 162, 235)',
                            'rgb(153, 102, 255)'
                        ],
                    }]
                },
                options:{
                    plugins:{
                        legend: {
                            display: false    
                        }
                    }
                }
            })
        })
        .catch((err)=>{
            console.error('Erro ao listar os dados!',err)
        })

        function toggleMenu() {
            const menu = document.getElementById('menu');
            menu.classList.toggle('show');
        } 