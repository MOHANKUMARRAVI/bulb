function change(){
    var img=document.getElementById("i1");
  
    if(img.src.match("./assets/bulboff.png")){
      img.src="./assets/lighton.png";
    }else{
      img.src="./assets/bulboff.png";
    }
   }