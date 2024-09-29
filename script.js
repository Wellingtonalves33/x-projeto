const list = document.querySelector("ul")
const buntonlist = document.querySelector('.button-mostra-tudo')
const buntonMap = document.querySelector('.button-map')
const valorTotal = document.querySelector('.valor-total')
const valorFiltro = document.querySelector('.valor-filtro')

function fomataValue(value){
    const newValue = value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    return newValue
}

function buttonMostra(produtosArray) {
    let mylist = ''
    produtosArray.forEach(produto => {

        mylist += `
         <li>
                <img src=${produto.src}>
                <p>${produto.name}</p>
                <p class="item-price">R$ ${fomataValue(produto.price)}</p>
            </li>
        `
    });
    list.innerHTML = mylist
}
function BottonMap() {
    const comDescon = menuOptions.map((produto) => ({
        name: produto.name,
        price: produto.price - (produto.price / 10),
        vegan: produto.vegan,
        src: produto.src,

    }))
    buttonMostra(comDescon)
}
function buttonTotal() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)
    list.innerHTML =
        `
        <li>
            <p> O Valor Total:<br>
            R$ ${fomataValue(totalValue)}</p>
         </li>
`
}
function buttonFiltro(){
    const saudavel = menuOptions.filter( (vegan) => vegan.vegan)

    buttonMostra(saudavel)
}



buntonlist.addEventListener('click', () => buttonMostra(menuOptions))
buntonMap.addEventListener('click', BottonMap)
valorTotal.addEventListener('click', buttonTotal)
valorFiltro.addEventListener('click', buttonFiltro)



