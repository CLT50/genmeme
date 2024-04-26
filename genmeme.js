let img = document.getElementsByTagName("img");
let form = document.querySelector("form");
const button = document.querySelector("button");
form.addEventListener("submit", function(e){
    e.preventDefault();
    const meme = document.createElement("div");
    const textTop= document.createElement("div");
    const textBottom = document.createElement("div");
    const img = document.createElement("img");
  
 
 
    img.src = document.getElementById("imageUrl").value;
    textTop.classList.add("textTop");
    textTop.innerHTML = document.getElementById("topText").value;
  textBottom.classList.add("textBottom");
      textBottom.innerHTML = document.getElementById("bottomText").value;
   if(img ==""|| textTop =="" || textBottom =="")  
     {alert ("Missing Field");
     return false;}

    meme.classList.add("meme");
    meme.append(textTop);
    meme.append(textBottom);
    meme.append(img);
    let memeContainer = document.getElementById("container");
    memeContainer.append(meme);

form.reset()
   
    }) 
  
    
    

