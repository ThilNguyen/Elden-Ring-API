const itemList = document.getElementById('itemList');
const searchBar = document.getElementById('search');
const weaponList = document.getElementById('weaponList');
const armorList = document.getElementById('armorList');

itemList.addEventListener('click', handleClick);


let items = [];
let weapons = [];
let armors = [];


searchBar.addEventListener('input', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredItems = items.data.filter((item) => {
        return (
            item.name.toLowerCase().includes(searchString) ||
            item.type.toLowerCase().includes(searchString)
        );
    });

    const filteredWeapons = weapons.data.filter((weapon) => {
        return (
            weapon.name.toLowerCase().includes(searchString) ||
            weapon.category.toLowerCase().includes(searchString)
        )
    })

    const filteredBosses = armors.data.filter((armor) => {
        return (
            armor.name.toLowerCase().includes(searchString) ||
            armor.category.toLowerCase().includes(searchString)
        )
    })

    displayItems(filteredItems);
    displayWeapons(filteredWeapons);
    displayArmors(filteredBosses);

});


 const loadItems = async () => {
     try {
         const res = await fetch('https://eldenring.fanapis.com/api/items?limit=100');
         items = await res.json();
        displayItems(items);
     } catch (err) {
         console.error(err);
     }
 };

 const loadWeapons = async () => {
    try {
        const res = await fetch('https://eldenring.fanapis.com/api/weapons?limit=100');
        weapons = await res.json();
       displayWeapons(weapons);
    } catch (err) {
        console.error(err);
    }
};

const loadArmors = async () => {
    try {
        const res = await fetch('https://eldenring.fanapis.com/api/armors?limit=100');
        armors = await res.json();
       displayWeapons(armors);
    } catch (err) {
        console.error(err);
    }
};


const displayItems = (items) => {
    const htmlString = Array.from(items).map((item) => {
            return `
            <li class="item">
            <button type="button" class="like_btn">
            <span id="icon"><i class="fa-regular fa-heart"></i></span>
            </button>
                <h2>${item.name}</h2>
                <p>Type: ${item.type}</p>
                <img src="${item.image}"></img>
            </li>
        `;
        })
        .join('');
    itemList.innerHTML =  htmlString;
    };
console.log(itemList)

const displayWeapons = (weapons) => {
    const htmlString = Array.from(weapons).map((weapon) => {
            return `
            <li class="weapon">
            <button type="button" class="like_btn">
            <span id="icon"><i class="fa-regular fa-heart"></i></span>
            </button>
                <h2>${weapon.name}</h2>
                <p>Category: ${weapon.category}</p>
                <img src="${weapon.image}"></img>
            </li>
        `;
        })
        .join('');
    weaponList.innerHTML = htmlString;
};

const displayArmors = (armors) => {
    const htmlString = Array.from(armors).map((armor) => {
           return `
            <li class="armor">
            <button type="button" class="like_btn">
            <span id="icon"><i class="fa-regular fa-heart"></i></span>
            </button>
                <h2>${armor.name}</h2>
                <p>Category: ${armor.category}</p>
                <img src="${armor.image}"></img>
            </li>

        `;
        })
        .join('');
    armorList.innerHTML = htmlString;
};


  function handleClick(e) {
    const likeIcon = document.querySelector("#icon")
      if (e.target.matches('button')){
          likeIcon.innerHTML = `<i class="fa-solid fa-heart"></i>`
  } else {
    likeIcon.innerHTML = `<i class="fa-regular fa-heart"></i>`
  }
  }

loadItems();
loadWeapons();
loadArmors();

const inputText = document.querySelector('#AddElement');
const myButton = document.querySelector('.add-btn');
const list = document.querySelector('.container .addElement-table-parent');
myButton.addEventListener('click', (e)=>{
  if(inputText.value != ""){
    e.preventDefault();
    const myLi = document.createElement('li');
    myLi.innerHTML = inputText.value;
    myLi.appendChild(myLi);

    const mySpan = document.createElement('span');
    mySpan.innerHTML = 'x';
    myLi.appendChild(mySpan);
    }
    const close = document.querySelectorAll('span');
    for(let i in close){
        close[i].addEventListener('click', ()=>{
            close[i].parentElement.style.opacity = 0;
            setTimeout(()=>{
                close[i].parentElement.style.display = 'none';
                close[i].parentElement.remove();
            }, 500);
        })
    }
    inputText.value = "";
});