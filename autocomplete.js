let availablekeyword=[
    "Anglebar",
    "Flatbar",
    "Squarebar",
    "Roundbar",
    "GISquaretube",
    "GalvanizedPlate",
    "MildSteelPlate",
    "BiCpurlins",
    "GiCpurlins",
    "BiExpandedMetal",
    "BiPerforated",
    "BiPipe",
    "BiSquaretube",
    "BoxGutter",
    "Lflashing",
    "RegularFlashing",
    "RidgeRoll",
    "WallFlashing",
    "CarryingChannel",
    "MetalFurring",
    "MetalStud",
    "WallAngle",
    "SteelDeck",
    "Channel",
    "CheckeredPlate",
    "ChickenWire",
    "ColorSheet",
    "SlottedAngle",
    "CycloneWire",
    "Deformedbar",
    "GiCorrugated",
    "Longspanribtype",
    "LongspanCorrugated",
    "GiPipe",
    "ZBar",
    "IBar",
    "Tbar",
    "Phenolic",
    "Plywood",
    "FicemBoard",
    "Shafting",
    "ThreadedBar",
    "StainlessSheet",
    "BarbedWire",
    "Wideflange",
    "Arrowpoint",
    "BlindRivets",
    "Bolt&Nut",
    "Wallclip",
    "Commonnails",
    "Concretenails",
    "Cornerplate",
    "Slottedanglefoot",
    "Cuttingdisc",
    "Grindingdisc",
    "Flapdisc",
    "Sandpaper",
    "Sandflex",
    "Cylindrical",
    "Drillbit",
    "Dynabolt",
    "Logscrew",
    "Expansionshield",
    "Epoxyprimer",
    "Redoxide",
    "Metaltextscrew",
    "Textscrewadapter",
    "Roofingnail",
    "Woodtextscrew",
    "Insulationfoam",
    "Giwire",
    "Blackscrew",
    "Windowhandle",
    "Windowhinges",
    "Paintthinner",
    "Lacquerthinner",
    "Paintbrush",
    "Miniroller",
    "Pillowblock",
    "Pioneerelastoseal",
    "Vulcaseal",
    "Chalkstone",
    "Steelbrush",
    "Swivelclamp",
    "Weldingglass",
    "Weldingrod",
    "Slidingdoortrack",
    "Slidingdoortrackroller",
    "Bielbow",
    "Tox"
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


  document.querySelectorAll('.searchcontentlist').forEach(link => {

    link.addEventListener('click', function(event) {

        event.preventDefault();
        navigateTo(this.getAttribute('href'));
    });
});
  
  if(!result.length){
    searchcontent.innerHTML="";
  }
}

function display(result){
    const content= result.map((list)=>{
        return `<a href="${list}.html" class="searchcontentlist"><li onclick="selectInput(this)" >  ${list} </li></a>`;
    });
    searchcontent.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(list){
  searchinput.value = list.innerHTML;
  searchcontent.innerHTML="";
}