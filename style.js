// dynamic buttons 
function buttons (){
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then(res=>res.json())
    .then(data=>{
        dynamicButtonsLoad(data.categories);
    })
}
const dynamicButtonsLoad = (buttons)=>{
    console.log(buttons);
    for(let button of buttons){
        console.log(button);
        const buttonsContainer = document.getElementById("dynamic-buttons");
        const div = document.createElement("div");
        div.innerHTML = `
         <button class=" 
         rounded-md btn btn-xs text-2xl ">${button.category}</button>
        
        
        `;
        buttonsContainer.appendChild(div);
    }
}

buttons();










// category
// : 
// "Music"
// category_id
// : 
// "1001"