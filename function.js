let items= document.querySelectorAll('.slider .list .item');
let next= document.getElementById("next");
let prev =document.getElementById("prev");
let thumbnails= document.querySelectorAll(".thumbnail .item");

//config param
let countitem= items.length;
let itemactive= 0;
//event next click
next.onclick=function(){
    itemactive=itemactive + 1;
    if(itemactive >= countitem){
        itemactive=0;
    }
    showslider();
}

//event prev click
prev.onclick=function(){
    itemactive= itemactive -1;
    if(itemactive < 0){
        itemactive=countitem - 1;
    }
    showslider();
}

//auto slider
let refreshinterval = setInterval(() =>{
    next.click();
},5000);

function showslider(){
    //remove item active old
    let itemactiveold= document.querySelector(".slider .list .item.active");
    let thumbnailactiveold= document.querySelector(".thumbnail .item.active");
    itemactiveold.classList.remove("active");
    thumbnailactiveold.classList.remove("active");

    //active new item
    items[itemactive].classList.add("active");
    thumbnails[itemactive].classList.add("active");

    clearInterval(refreshinterval);
    refreshinterval = setInterval(() =>{
        next.click();
    },5000)
}

//click thumbnails
thumbnails.forEach((thumbnail,index)=>{
    thumbnail.addEventListener("click",()=>{
        itemactive=index;
        showslider();
    })
})





