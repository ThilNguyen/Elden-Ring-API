const itemCardTemplate = document.querySelector("[data-item-template]")
const itemCardContainer = document.querySelector("[data-item-cards-container]")
const ammoCardContainer = document.querySelector("[data-ammo-cards-container]")
const ammoCardTemplate = document.querySelector("[data-ammo-template]")
const searchInput = document.querySelector("[data-search]")

let items = []
let ammos = []

searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase()
    items.forEach(item => {
        const itemisVisible = 
        item.name.toLowerCase().includes(value) || 
        item.type.toLowerCase().includes(value)
        item.itemelement.classList.toggle("hide", !itemisVisible)
    }) 
    ammos.forEach(ammo => {
        if (ammo.type !== null ) {
        const ammoisVisible = 
        ammo.name.toLowerCase().includes(value) || 
        ammo.type.toLowerCase().includes(value)
        ammo.ammoelement.classList.toggle("hide", !ammoisVisible)
}})
})





fetch('https://eldenring.fanapis.com/api/items?limit=100').then(res => res.json()) //res = response
.then(data => {
   items = data.data.map(item => { 
    const itemcard = itemCardTemplate.content.cloneNode(true).children[0] //forEach ist eine Funktion, die nur mit Maps oder Arrays funktioniert
    const itemheader = itemcard.querySelector("[data-item-header]")
    const itembody = itemcard.querySelector("[data-item-body]")
    itemheader.textContent = item.name
    itembody.textContent = item.type
    itemCardContainer.append(itemcard)
    console.log(itemcard);
    return { name: item.name, type: item.type, itemelement: itemcard}
    })  
})


fetch('https://eldenring.fanapis.com/api/ammos?limit=100').then(res => res.json())
.then(data => {
    ammos = data.data.map(ammo => {
        console.log(data)
        const ammocard = ammoCardTemplate.content.cloneNode(true).children[0]
        const ammoheader = ammocard.querySelector("[data-ammo-header]")
        const ammobody = ammocard.querySelector("[data-ammo-body]")
        ammoheader.textContent = ammo.name
        ammobody.textContent = ammo.type
        ammoCardContainer.append(ammocard)
        console.log(ammocard)
        return { name: ammo.name, type: ammo.type, ammoelement: ammocard}
        })    
})
