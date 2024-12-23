const animation  = document.querySelectorAll(".js-covers__inner");  //ul
const styleSection = document.querySelector(".container_covers");  //div
window.addEventListener("scroll", animScroll);

;
const heightSection = styleSection.offsetHeight // h section

function animScroll (){
   for(let i =0; i < animation.length; i++){
      const anItem = animation[i];


let windowCenter = window.innerHeight;  //h window brauser

 const topSection = offset(styleSection).top   // h top
 let anItemPoint = windowCenter - heightSection /5;

if(heightSection > windowCenter){
   windowCenter = windowCenter - windowCenter/5
}

if((pageYOffset > topSection - anItemPoint) && (pageYOffset < (topSection + heightSection))){

   anItem.classList.replace( "visually-hidden", "covers__inner");
} else{
anItem.classList.replace( "covers__inner", "visually-hidden");
}

 if(pageYOffset > topSection + (heightSection - 100)){
   anItem.classList.replace( "covers__inner", "visually-hidden");
 }
}
}



function offset(el){
   const rect = el.getBoundingClientRect(), 
   scrollLeft = window.pageXOffset || document.documentElement.scrollLeft, 
   scrollTop = window.pageYOffset || document.documentElement.scrollTop;
   return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
}

