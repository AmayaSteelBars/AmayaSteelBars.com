let items= document.querySelectorAll('.slider .list .item');
let items2= document.querySelectorAll('.slider2 .list2 .item2');
let next= document.getElementById("next");
let next2= document.getElementById("next2");
let prev =document.getElementById("prev");
let prev2 =document.getElementById("prev2");
let thumbnails= document.querySelectorAll(".thumbnail .item");
let thumbnails2= document.querySelectorAll(".thumbnail2 .item2");

let thumbnailcontainer= document.querySelector(".thumbnail");

let thumbnailcontainer2= document.querySelector(".thumbnail2")


  


//config param
let countitem= items.length;
let countitem2= items2.length;
let itemactive= 0;
let item2active= 0;
//event next click
next.onclick=function(){
    itemactive=itemactive + 1;
    if(itemactive >= countitem){
        itemactive=0;
    }
    
    const screenWidth = window.innerWidth;

// Set scroll amount based on screen size
  let scrollAmount;
  if (screenWidth <= 300) {
    scrollAmount = 80; // Smaller scroll for smaller screens
  } else if (screenWidth <= 992) {
    scrollAmount = 90; // Medium scroll for medium screens
  } else {
    scrollAmount = 45; // Larger scroll for larger screens
  }
  
  thumbnailcontainer.scrollLeft += scrollAmount;

    
    showslider();
}

next2.onclick=function(){
    item2active=item2active + 1;
    if(item2active >= countitem2){
        item2active=0;
    }
    
    
        const screenWidth = window.innerWidth;

// Set scroll amount based on screen size
  let scrollAmount;
  if (screenWidth <= 300) {
    scrollAmount = 80; // Smaller scroll for smaller screens
  } else if (screenWidth <= 992) {
    scrollAmount = 90; // Medium scroll for medium screens
  } else {
    scrollAmount = 45; // Larger scroll for larger screens
  }
  
  thumbnailcontainer2.scrollLeft += scrollAmount;
    
    showslider2();
}


//event prev click
prev.onclick=function(){
    itemactive= itemactive -1;
    if(itemactive < 0){
        itemactive=countitem - 1;
    }
    
        const screenWidth = window.innerWidth;

// Set scroll amount based on screen size
  let scrollAmount;
  if (screenWidth <= 300) {
    scrollAmount = 80; // Smaller scroll for smaller screens
  } else if (screenWidth <= 992) {
    scrollAmount = 90; // Medium scroll for medium screens
  } else {
    scrollAmount = 45; // Larger scroll for larger screens
  }
  
  thumbnailcontainer.scrollLeft -= scrollAmount;
    
    showslider();
}

prev2.onclick=function(){
    item2active= item2active -1;
    if(item2active < 0){
        item2active=countitem2 - 1;
    }
    
        const screenWidth = window.innerWidth;

// Set scroll amount based on screen size
  let scrollAmount;
  if (screenWidth <= 300) {
    scrollAmount = 80; // Smaller scroll for smaller screens
  } else if (screenWidth <= 992) {
    scrollAmount = 90; // Medium scroll for medium screens
  } else {
    scrollAmount = 45; // Larger scroll for larger screens
  }
  
  thumbnailcontainer2.scrollLeft -= scrollAmount;
    
    showslider2();
}

//auto slider
let refreshinterval = setInterval(() =>{
    next.click();
},5000);

let refreshinterval2 = setInterval(() =>{
    next2.click();
},5500);

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

function showslider2(){
    //remove item active old
    let itemactiveold2= document.querySelector(".slider2 .list2 .item2.active");
    let thumbnailactiveold2= document.querySelector(".thumbnail2 .item2.active");
    itemactiveold2.classList.remove("active");
    thumbnailactiveold2.classList.remove("active");

    //active new item
    items2[item2active].classList.add("active");
    thumbnails2[item2active].classList.add("active");

    clearInterval(refreshinterval2);
    refreshinterval2 = setInterval(() =>{
        next2.click();
    },5000)
}

//click thumbnails
thumbnails.forEach((thumbnail,index)=>{
    thumbnail.addEventListener("click",()=>{
        itemactive=index;
        showslider();
    })
})

thumbnails2.forEach((thumbnail2,index)=>{
    thumbnail2.addEventListener("click",()=>{
        item2active=index;
        showslider2();
    })
})



