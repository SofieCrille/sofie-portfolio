 window.onscroll = function() { adjustSticky(); };

 const sideInfo = document.querySelector('.side-info');
 const section = document.querySelector('.varktojskasse');
 const nextSection = document.querySelector('.projekter');
 const stickyStart = section.offsetTop;
 const sectionEnd = section.offsetTop + section.offsetHeight;
 const stopBeforeEnd = sectionEnd - 150; 

 function adjustSticky() {
     const scrollPosition = window.pageYOffset;

     if (scrollPosition >= stickyStart && scrollPosition < stopBeforeEnd) {
         sideInfo.style.position = "sticky";
         sideInfo.style.top = "150px"; 
     } 
     else if (scrollPosition >= stopBeforeEnd) {
         sideInfo.style.position = "absolute";
         sideInfo.style.top = `${stopBeforeEnd - stickyStart}px`; 
     } 
     else {
         sideInfo.style.position = "sticky";
         sideInfo.style.top = "150px";
     }
 }


 
 
