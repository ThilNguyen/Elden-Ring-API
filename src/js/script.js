const itemCardTemplate = document.querySelector("[data-item-template]")
const itemCardContainer = document.querySelector("[data-item-cards-container]")
const searchInput = document.querySelector("[data-search]")

let items = []

searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase()
    items.forEach(item => {
        const isVisible = 
        item.name.toLowerCase().includes(value) || 
        item.type.toLowerCase().includes(value)
        item.element.classList.toggle("hide", !isVisible)
    })
})

fetch('https://eldenring.fanapis.com/api/items')
.then(res => res.json()) //res = response
.then(data => {
   items = data.data.map(item => { 
    const card = itemCardTemplate.content.cloneNode(true).children[0] //forEach ist eine Funktion, die nur mit Maps oder Arrays funktioniert
    const header = card.querySelector("[data-header]")
    const body = card.querySelector("[data-body]")
    header.textContent = item.name
    body.textContent = item.type
    itemCardContainer.append(card)
    return { name: item.name, type: item.type, element: card}
    })
})