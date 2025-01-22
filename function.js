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

  itemactive=itemactive + 1;
    if(itemactive >= countitem){
        itemactive=0;
        thumbnailcontainer.scrollTo({left:0-scrollAmount})
    }
    else if (itemactive <= countitem){
      thumbnailcontainer.scrollTo({left:itemactive*scrollAmount})
    } 
    showslider();
}

next2.onclick=function(){
    
    
    
        const screenWidth = window.innerWidth;

// Set scroll amount based on screen size
  let scrollAmount2;
  if (screenWidth <= 300) {
    scrollAmount2 = 80; // Smaller scroll for smaller screens
  } else if (screenWidth <= 992) {
    scrollAmount2 = 90; // Medium scroll for medium screens
  } else {
    scrollAmount2 = 45; // Larger scroll for larger screens
  }
  
  thumbnailcontainer2.scrollLeft += scrollAmount2;

  item2active=item2active + 1;
    if(item2active >= countitem2){
        item2active=0;
        thumbnailcontainer2.scrollTo({left:0-scrollAmount2})
    }
    else if (item2active <= countitem2){
      thumbnailcontainer2.scrollTo({left:item2active*scrollAmount2})
    } 
    
    showslider2();
}


//event prev click
prev.onclick=function(){
   
    
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

  itemactive= itemactive -1;
  if(itemactive < 0){
      itemactive=countitem - 1;
      thumbnailcontainer.scrollTo({left:0+itemactive*scrollAmount})
  }
  else if (itemactive <= countitem){
    thumbnailcontainer.scrollTo({left:itemactive*scrollAmount})
  } 
    
    showslider();
}

prev2.onclick=function(){
  
        const screenWidth = window.innerWidth;

// Set scroll amount based on screen size
  let scrollAmount2;
  if (screenWidth <= 300) {
    scrollAmount2 = 80; // Smaller scroll for smaller screens
  } else if (screenWidth <= 992) {
    scrollAmount2 = 90; // Medium scroll for medium screens
  } else {
    scrollAmount2 = 45; // Larger scroll for larger screens
  }
  
  thumbnailcontainer2.scrollLeft -= scrollAmount2;

  item2active= item2active -1;
  if(item2active < 0){
      item2active=countitem2 - 1;
      thumbnailcontainer2.scrollTo({left:0+item2active*scrollAmount2})
  }
  else if (item2active <= countitem2){
    thumbnailcontainer2.scrollTo({left:item2active*scrollAmount2})
  } 
    
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


//camera detection

/*document.getElementById("camera-button").addEventListener("click", () => {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "image/*";
  input.onchange = (event) => {
    const file = event.target.files[0];
    if (file) {
      processImage(file);
    }
  };
  input.click();
});

function processImage(file) {
  const reader = new FileReader();
  reader.onload = () => {
  const base64Image = reader.result?.split(',')[1];
  if (base64Image) {
    analyzeImage(base64Image);
  } else {
    console.error("Failed to read image data");
  }
};
  reader.readAsDataURL(file);
}

function analyzeImage(base64Image) {
  fetch('https://vision.googleapis.com/v1/images:annotate?key=AIzaSyBe8pGCScPoBWs3L_Z4i8B5aQFVlw1okDM', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      requests: [
        {
          image: { content: base64Image },
          features: [{ type: 'LABEL_DETECTION', maxResults: 5 }]
        }
      ]
    })
  })
  .then((response) => response.json())
  .then((data) => {
    const responses = data.responses || [];
if (responses.length > 0 && responses[0].labelAnnotations) {
  const labels = responses[0].labelAnnotations;
  const highestConfidenceLabel = labels[0]?.description;
  document.querySelector(".search-input").value = highestConfidenceLabel || "No label detected";
} else {
  alert("No labels detected in the image.");
}
    const highestConfidenceLabel = labels[0]?.description;
    if (highestConfidenceLabel) {
      document.querySelector(".search-input").value = highestConfidenceLabel;
    } else {
      alert("No results found");
    }
  })
  .catch((error) => console.error("error analyzing image:", error));
}

console.log("File uploaded:", file);
console.log("Base64 image:", base64Image);
console.log("API Response:", data); */

