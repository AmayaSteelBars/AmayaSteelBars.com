let availablekeyword=[
    "Anglebar",
    "Flatbar",
    "Squarebar",
    "Roundbar"
];

const searchcontent = document.querySelector(".search-content");
const searchinput = document.querySelector(".search-input");

searchinput.onkeyup =function(){
    let result = [];
    let input =searchinput.value;
    if(input.length){
        result = availablekeyword.filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase());
        })
        console.log(result)
    }
  display(result);
  
  if(!result.length){
    searchcontent.innerHTML="";
  }
}

function display(result){
    const content= result.map((list)=>{
        return `<li onclick="selectInput(this)" class="searchcontentlist"> <a href="${list}.html"> ${list}</a> </li>`;
    });
    searchcontent.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(list){
  searchinput.value = list.innerHTML;
  searchcontent.innerHTML="";
}