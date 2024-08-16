document.querySelector(".btn span").onclick = function(){
    let name = prompt("please enter your name")
    document.querySelector(".header p").innerHTML = `MRS : ${name}`
    document.querySelector(".btn").remove()
    

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
function matchedblocks(block1,block2) {
    
    if(block1.dataset.numbers === block2.dataset.numbers){

        block1.classList.remove("flipped")
        block2.classList.remove("flipped")

        block1.classList.add("matched")
        block2.classList.add("matched")

        tries ++
        trueTries++
    }else {

        setTimeout(()=>{

            block1.classList.remove("flipped")
        block2.classList.remove("flipped")

        },1000)

        tries++

        

    }

    document.querySelector(".tries").innerHTML = `Tries: ${trueTries}/${tries}`



}