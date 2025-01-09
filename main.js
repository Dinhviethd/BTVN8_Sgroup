function addHTML(){
    const pokemon= [{id: "#1", name: "Bulbasaur", type: ["Grass", "Poison"], img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"}, {id: "#2", name: "Ivysaur", type: ["Grass", "Poison"], img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"}, {id: "#3", name: "Venusaur", type: ["Grass", "Poison"], img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"}, {id: "#4", name: "Charmander", type: ["Fire"], img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"}, {id: "#5", name: "Charmeleon", type: ["Fire"], img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"}, {id: "#6", name: "Charizard", type: ["Fire", "Flying"], img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"}]
    const container= document.querySelector('.container')
    for (let i of pokemon){
        const item= document.createElement('div')
        item.classList.add('Pokemon')
        const img= document.createElement("img")
        img.src= i.img
        img.alt= i.name
        const name= document.createElement("h3")
        name.innerHTML= i.name
        const type_container=document.createElement("div")
        type_container.classList.add('Element')
        for (let j of i.type){
            const type= document.createElement("span")
            type.classList.add("Type",`${j}`)
            type.innerHTML= j
            type_container.appendChild(type)
        }
        item.appendChild(img)
        item.appendChild(name)
        item.appendChild(type_container)
        container.appendChild(item)
    }
}
const button= document.querySelector(".loadInfor")
button.addEventListener("click", addHTML)