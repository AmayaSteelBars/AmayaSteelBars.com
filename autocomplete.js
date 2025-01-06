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
}

function display(result){
    const content= result.map((list)=>{
        return "<li>" + list + "</li>";
    });
    searchcontent.innerHTML = "<ul>" + content.join('') + "</ul>";
}