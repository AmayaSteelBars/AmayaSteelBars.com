let availablekeyword=[
    "AngleBar",
    "FlatBar",
    "SquareBar",
    "RoundBar",
    "GiSquareTube",
    "GalvanizedPlate",
    "MildSteelPlate",
    "BiCpurlins",
    "GiCpurlins",
    "BiExpandedMetal",
    "BiPerforated",
    "BiPipe",
    "BiSquareTube",
    "BoxGutter",
    "lFlashing",
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
    "ColoredSheet",
    "SlottedAngle",
    "CycloneWire",
    "DeformedBar",
    "GiCorrugated",
    "LongSpanRibType",
    "LongSpanCorrugated",
    "GiPipe",
    "zBar",
    "iBar",
    "tBar",
    "Phenolic",
    "Plywood",
    "FicemBoard",
    "Shafting",
    "ThreadedBar",
    "SteelMatting",
    "StainlessSheet",
    "BarbedWire",
    "WideFlange",
    "iBeam",
    "ArrowPoint",
    "BlindRivets",
    "BoltAndNut",
    "WallClip",
    "CommonNails",
    "ConcreteNails",
    "CornerPlate",
    "SlottedAngleFoot",
    "CuttingDisc",
    "GrindingDisc",
    "FlapDisc",
    "SandPaper",
    "SandFlex",
    "Cylindrical",
    "DrillBit",
    "DynaBolt",
    "LogScrew",
    "ExpansionShield",
    "EpoxyPrimer",
    "RedOxide",
    "MetalTextScrew",
    "TextScrewAdapter",
    "RoofingNail",
    "WoodTextScrew",
    "InsulationFoam",
    "GiWire",
    "BlackScrew",
    "WindowHandle",
    "WindowHinges",
    "PaintThinner",
    "LacquerThinner",
    "PaintBrush",
    "MiniRoller",
    "PillowBlock",
    "PioneerElastoseal",
    "Vulcaseal",
    "ChalkStone",
    "SteelBrush",
    "SwivelClamp",
    "WeldingGlass",
    "WeldingRod",
    "SlidingDoorTrack",
    "SlidingDoorTrackRoller",
    "BiElbow",
    "Tox",
    "SiliconSealant",
    "CaulkingGun"
];

let searchablekeywords = availablekeyword.flatMap(keyword=>{
  const spacekeyword = keyword.replace(/([a-z])([A-Z])/g, "$1 $2");
  return [keyword.toLowerCase(),spacekeyword.toLowerCase()];
});

const searchcontent = document.querySelector(".search-content");
const searchinput = document.querySelector(".search-input");

searchinput.onkeyup =function(){
    let result = [];
    let input =searchinput.value;
    if(input.length){
        result = searchablekeywords.filter((keyword)=>{
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

function triggerSearch() {
    let result = [];
    let input =searchinput.value;
    if(input.length){
        result = searchablekeywords.filter((keyword)=>{
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
      
      const formattedlist=list.replace(/\s+/g,'')

      const capitalizedFormattedList = formattedlist.charAt(0).toUpperCase() + formattedlist.slice(1);

        return `<a href="${capitalizedFormattedList}.html" class="searchcontentlist"><li onclick="selectInput(this)" >${list}</li></a>`;
    });
    searchcontent.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(list){
  searchinput.value = list.innerHTML;
  searchcontent.innerHTML="";
}
