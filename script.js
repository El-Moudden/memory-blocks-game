let savedBtn = document.querySelector(".btn");
let savedBtnSpan = document.querySelector(".btn span");
let savedBody = document.querySelector("body");
document.querySelector(".btn span").onclick = function(){
    let name = prompt("please enter your name")

    if(name == "" || name== null){
        alert("Please enter your name")
        return false;  // prevent the page from loading when the user enters nothing as the name
    }
    document.querySelector(".header p").innerHTML = `MRS : ${name}`
   
   
    savedBtn.remove()
    

    console.log(name)
    

}

let blocks = document.querySelector(".blocks")
blocksArray = Array.from(blocks.children)


let blocksOrders = [...Array(blocksArray.length).keys()]



blocksArray.forEach((block,index)=>{
    shuffle(blocksOrders);
    block.style.order = blocksOrders[index]
    
    block.addEventListener("click", function(){

        flipped(block);
        
    })
})




function shuffle(array){

    let arrayLenght = array.length
    let temp ; 

    while(arrayLenght >0){
        let randomX = Math.floor(Math.random() * arrayLenght) ;
        arrayLenght-- ;

        [array[arrayLenght ] , array[randomX] ]= [array[randomX] , array[arrayLenght]]
        
    }
}

function flipped(selectedBlock){

    selectedBlock.classList.add("flipped");
    let = flippedbloks = blocksArray.filter(fblock => fblock.classList.contains("flipped"))

    if (flippedbloks.length ==2){
        
        noClick();
    }
    matchedblocks(flippedbloks[0],flippedbloks[1])

}

function noClick(){
    blocks.classList.add("stopClick")

    setTimeout(()=>{
    blocks.classList.remove("stopClick")


    },1500)
}
let tries  = 0 
let trueTries =0

function endGame(){
    if(trueTries == 8){

        const fragment = document.createDocumentFragment(); // Create a document fragment

        const newDiv = document.createElement("div"); // Create a new <p> element
        newDiv.classList.add("btn"); // Add class to <p> element

        const newSpan = document.createElement("p"); // Create a new <span> element
        newSpan.classList.add("btnSpan"); // Add class to <span> element

        const ik = document.createElement("div")
        ik.classList.add("ik")

        const icon = document.createElement("i"); // Create a new <i> element for the icon
        icon.classList.add("fa-solid", "fa-arrow-rotate-right"); // Add Font Awesome classes for the icon

        const newContent = document.createTextNode("YOU DID IT"); // Create a text node

        
        newSpan.appendChild(newContent); // Append the text node to the <span>
        ik.appendChild(icon)
        newDiv.appendChild(newSpan); // Append the <span> to the <p>
        newDiv.appendChild(ik); // Append the icon to the <span>

    // Append the <p> element to the document fragment
    
        fragment.appendChild(newDiv);

        document.body.appendChild(fragment); // Append the document fragment to the body


        ik.addEventListener("click",function(){
            location.reload() // Reload the page when the user clicks the icon
        } )

    
} }




function matchedblocks(block1,block2) {
    
    if(block1.dataset.numbers === block2.dataset.numbers){

        block1.classList.remove("flipped")
        block2.classList.remove("flipped")

        block1.classList.add("matched")
        block2.classList.add("matched")

        tries ++
        trueTries++
        endGame()
    }else {

        setTimeout(()=>{
        
            block1.classList.remove("flipped")
            block2.classList.remove("flipped")

        },1000)

        tries++

        

    }

    document.querySelector(".tries").innerHTML = `Tries: ${trueTries}/${tries}`



}
