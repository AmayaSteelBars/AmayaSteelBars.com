//Button function
let a;
let b;
let c;
let d;

      function getvalue()
    {
     let channel=document.getElementById("channel").value;

     switch(channel){
     case "diameter":
     document.getElementById("diameter").innerHTML="kg:";
     document.getElementById("thickness").innerHTML="Thickness:";
     document.getElementById("length").innerHTML="Length:";
     break;

     case "thickness":
     document.getElementById("diameter").innerHTML="kg:";
     document.getElementById("thickness").innerHTML="Diameter:";
     document.getElementById("length").innerHTML="Length:";
     break;

     case "length":
     document.getElementById("diameter").innerHTML="kg:";
     document.getElementById("thickness").innerHTML="Diameter:";
     document.getElementById("length").innerHTML="Thickness:";
     break;

     case "kg":
     document.getElementById("diameter").innerHTML="Diameter:";
     document.getElementById("thickness").innerHTML="Thickness:";
     document.getElementById("length").innerHTML="Length:";
     break;
    }

   }

document.getElementById("compute").onclick=function(){
    let measurement1=document.getElementById("measurement1").value;
    let measurement2=document.getElementById("measurement2").value;
    let measurement3=document.getElementById("measurement3").value;

    a=document.getElementById("txtdiameter").value;
    
    b=document.getElementById("txtthickness").value;
    
    c=document.getElementById("txtlength").value;



    switch(measurement1){
        case "mm":
        a=a/1000;
        break;
        
        case "cm":
        a=a/100;
        break;
        
        case "inch":
        a=a*0.0254;
        break;
  
        case "kg":
        a=a*1;
        break;
    }
    
    
        switch(measurement2){
        case "mm":
        b=b/1000;
        break;
        
        case "cm":
        b=b/100;
        break;
        
        case "inch":
        b=b*0.0254;
        break;
    }
    
        switch(measurement3){
        case "mm":
        c=c/1000;
        break;
        
        case "cm":
        c=c/100;
        break;
        
        case "inch":
        c=c*0.0254;
        break;
    }
    

    let channel=document.getElementById("channel").value;
    switch(channel){
    case "diameter":
    d=(a/(3.14159*b*c*7850))*1000;
    break;
     
    case "thickness":
    d=(a/(3.14159*b*c*7850))*1000;
    break;

    case "length":
    d=a/(3.14159*b*c*7850);
    break;

    case "kg":
    d=3.14159*a*b*c*7850;
    break;
    }
    
    
    document.getElementById("result").innerHTML= d +"kg";
}